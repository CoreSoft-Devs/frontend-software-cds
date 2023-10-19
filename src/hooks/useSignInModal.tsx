import { useCallback, useMemo, useState } from "react";
import SignInModal from "@/components/layout/signInModal";

export function useSignInModal() {
  const [showSignModal, setShowSignModal] = useState<boolean>(false);

  const signInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignModal}
        setShowSignInModal={setShowSignModal}
      />
    );
  }, [showSignModal, setShowSignModal]);

  return useMemo(
    () => ({
      SignInModal: signInModalCallback,
      setShowSignModal,
    }),
    [setShowSignModal, signInModalCallback]
  );
}
