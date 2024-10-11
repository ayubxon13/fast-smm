"use client";
import {createClient} from "@/utils/supabase/client";
import {User} from "@supabase/supabase-js";
import {useState, useEffect} from "react";

export function useGetUser() {
  const supabase = createClient();

  const [userData, setUserData] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | {}>(null);

  async function getUserData() {
    const {data, error} = await supabase.auth.getUser();
    if (error) {
      console.error("Foydalanuvchini olishda xato:", error);
      setError(error.message);
      setLoading(false);
      return;
    }
    setUserData(data?.user || null);
    setLoading(false);
  }
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return {userData, loading, error};
}
