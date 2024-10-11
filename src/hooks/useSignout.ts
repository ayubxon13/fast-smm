import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";

export const useSignout = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const signout = useCallback(async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state
    const {error: signoutError} = await supabase.auth.signOut();
    setLoading(false); // End loading

    if (signoutError) {
      setError(signoutError.message); // Set error message
      setSuccess(false); // Indicate failure
      router.push("/error");
      return {success: false, error: signoutError.message};
    }

    router.push("/");
    setSuccess(true); // Indicate success
    return {success: true};
  }, [router, supabase]);

  return {signout, error, success, loading};
};
