import { FormEvent } from "react";

import * as Photos from "../../services/photos";
import * as C from "./styled";

type Props = {
  url: string;
  name: string;
};

export const PhotoItem = ({ url, name }: Props) => {
  async function handleDelete(e: FormEvent) {
    await Photos.DeteleItem(name);

    console.log(name);
    window.location.reload();
  }

  return (
    <C.Container>
      <img src={url} alt="Imagem" />

      <C.cardButton>
        <C.Name>{name}</C.Name>
        <C.ButtonDelete>
          <button onClick={handleDelete}>Excluir</button>
        </C.ButtonDelete>
      </C.cardButton>
    </C.Container>
  );
};
