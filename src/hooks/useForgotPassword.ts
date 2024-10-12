import {useCallback, useState} from "react";
import {createClient} from "@/utils/supabase/client";

export const useForgotPassword = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const forgotPassword = useCallback(
    async (email: string) => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      const {error: forgotError} = await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo: `${window.location.origin}/reset-password`, // Redirect user to a password reset page after receiving email
        }
      );
      setLoading(false); // End loading

      if (forgotError) {
        setError(forgotError.message); // Set error message
        setSuccess(false); // Indicate failure
        return {success: false, error: forgotError.message};
      }

      setSuccess(true); // Indicate success
      return {success: true};
    },
    [supabase]
  );

  return {forgotPassword, error, success, loading};
};
