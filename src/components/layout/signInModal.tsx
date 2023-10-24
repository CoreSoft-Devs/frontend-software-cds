import React, { Dispatch, SetStateAction } from "react";
import Modal from "../shared/modal";
import Image from "next/image";
import Link from "next/link";

type Props = {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
};

const SignInModal = ({ showSignInModal, setShowSignInModal }: Props) => {
  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-b-gray-500/30 px-4 py-6 pt-6 text-center">
          <Image
            src="/logo.png"
            alt="cds logo"
            className="h-10 w-10 rounded-full select-none pointer-events-none"
            width={20}
            height={20}
          />
          <h3 className="text-2xl font-bold">Iniciar Sesión</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Únete a nosotros y sé parte de esta emocionante travesía. ¡Juntos
            llevaremos nuestras habilidades al siguiente nivel!
          </p>
        </div>
        <div className="flex flex-col space-y-4 py-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            ¿No tienes una cuenta?{" "}
            <Link
              href="#"
              className="hover:opacity-70 transform transition-opacity"
            >
              Regístrate aquí
            </Link>
          </p>
          <button className="text-sm text-gray-500 dark:text-gray-300 py-2 hover:bg-gray-100/10 transform transition-colors">
            Continuar con una cuenta existente
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
