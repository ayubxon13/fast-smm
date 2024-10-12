"use client";
import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

export const useUpdateUserCredentials = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const updateUserCredentials = useCallback(
    async (formData: FormData) => {
      setLoading(true);
      const {data: userData, error: userError} = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        setLoading(false);
        router.push("/");
        toast.error("Foydalanuvchi topilmadi. Iltimos, qayta kiring.");
        return {success: false, error: "User not found"};
      }

      const username = formData.get("username") as string;
      const currentPassword = formData.get("current-password") as string;
      const newPassword = formData.get("new-password") as string;

      if (!username || !currentPassword) {
        setLoading(false);
        toast.error("Barcha kerakli maydonlarni to'ldiring.");
        return {success: false, error: "Missing fields"};
      }

      const isValidPassword =
        currentPassword === userData.user?.user_metadata?.password;

      if (!isValidPassword) {
        setLoading(false);
        toast.error("Joriy parol noto'g'ri.");
        return {success: false, error: "Invalid password"};
      }

      const {error: updateError} = await supabase.auth.updateUser({
        data: {username},
        password: newPassword || undefined,
      });

      setLoading(false);

      if (updateError) {
        let errorMessage = "";
        switch (updateError.message) {
          case "New password should be different from the old password.":
            errorMessage = "Yangi parol eski paroldan farq qilishi kerak.";
            break;
          default:
            errorMessage = "Noma'lum xatolik yuz berdi.";
        }
        toast.error(errorMessage);
        return {success: false, error: updateError.message};
      }

      toast.success("Foydalanuvchi ma'lumotlari muvaffaqiyatli yangilandi.");
      setSuccess(true);
      return {success: true};
    },
    [router, supabase]
  );

  return {updateUserCredentials, loading, success};
};
