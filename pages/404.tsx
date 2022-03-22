import * as C from "Constants/index";
import * as S from "Styles/style.404";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(C.About.ROUTE);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <>
      <S.Container>{C.ERROR}</S.Container>
    </>
  );
}
