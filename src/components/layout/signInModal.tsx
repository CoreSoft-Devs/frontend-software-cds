import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "../shared/modal";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type props = {
  showSignInModal: boolean,
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}
const SignInModal = ({ showSignInModal, setShowSignInModal }: props) => {
  const { status, data } = useSession()
  return (
    <Modal setShowModal={setShowSignInModal} showModal={showSignInModal}>
      <div className="w-full overflow-hidden shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-b-gray-500/30 px-4 py-6 pt-6 text-center">
          <Image
            src={data?.user ? data.user.image : "/logo.png"}
            alt="cds logo"
            className="h-10 w-10 rounded-full select-none pointer-events-none"
            width={20}
            height={20}
          />
          <h3 className="text-2xl font-bold">{data?.user ? data.user.name : "Iniciar Sesión"}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {data?.user ? data.user.email : "Únete a nosotros y sé parte de esta emocionante travesía. ¡Juntos llevaremos nuestras habilidades al siguiente nivel!"}
          </p>
          {status === 'authenticated' && <p className="text-xs text-gray-400 dark:text-gray-400 px-4">
            Autenticación en construcción, está cuenta no está siendo registrada en la base de datos.
          </p>}
        </div>
        <div className="flex flex-col space-y-4 py-8 text-center">
          {status === 'unauthenticated' ? <>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ¿No tienes una cuenta?{" "}
              <Link
                href="#"
                className="hover:opacity-70"
              >
                Regístrate aquí
              </Link>
            </p>
            <button className="text-sm text-gray-600 dark:text-gray-300 py-2 hover:dark:bg-gray-500/30 hover:bg-gray-500/30">
              Continuar con una cuenta existente
            </button>
            <button className="mx-auto w-fit px-6 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-400" onClick={() => signIn('google')}>Iniciar Sesión con Google</button>
          </> : (
            <button className="mx-auto w-fit px-6 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-400"
              onClick={() => {
                signOut({ redirect: true })
                setShowSignInModal(false)
              }}
            >Cerrar sesión</button>
          )
          }
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
