import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const redirectLogin = function () {
    router.push("/home");
  };
  return (
    <button onClick={redirectLogin}>
      <span>Alo google</span>
    </button>
  );
}
