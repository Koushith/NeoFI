import { useState } from "react";
import { Modal } from "../../components";

export const EarnPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: 18, margin: 20 }}>Earn</h1>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>
      {showModal && (
        <Modal title="Example Modal" onClose={handleModalClose}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            accusamus aut nam fuga! Reprehenderit, ratione suscipit in
            distinctio libero voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            sit ex, doloribus ea dolores animi temporibus ad molestias culpa
            odio qui sint inventore corrupti maiores accusantium laboriosam
            suscipit ducimus earum alias excepturi omnis. Iure, consequuntur
            error? Consequuntur, beatae sit. Alias quasi vero ullam culpa
            mollitia laborum qui neque aliquam officiis, fugiat dicta rerum
            consequuntur esse harum iure quisquam veritatis omnis, error amet.
            Ex eos deserunt soluta mollitia quisquam! Officiis dolorum
            consequatur nesciunt amet architecto tenetur, doloremque natus
            quisquam officia ab aperiam ipsam suscipit! Consequuntur, esse
            perferendis vitae aspernatur inventore facilis officia voluptates!
            Commodi fugiat illum laborum aliquid. Temporibus amet facilis
            excepturi doloremque omnis, illum repellat harum illo laboriosam,
            explicabo, at dicta vitae incidunt tenetur. Aliquam magni vitae
            neque labore odio deleniti, nihil id voluptas perferendis, impedit
            magnam repellat tenetur animi reiciendis, dolore deserunt dolores!
            Culpa inventore quas fugit quaerat, laborum harum voluptate facere
            eligendi sint nihil repellat aliquam ea. Maxime pariatur sit enim,
            quibusdam totam voluptates molestiae soluta fugiat facilis itaque
            nemo nobis ab blanditiis ipsa impedit possimus laudantium harum.
            Repudiandae necessitatibus voluptatem eaque iste ducimus eligendi
            error cum beatae, excepturi libero quam nulla? Eius, magnam. Magni
            vitae similique illum totam beatae nesciunt ratione officiis commodi
            obcaecati. Perferendis adipisci a eos quas doloribus, totam
            repudiandae eligendi optio corporis velit officiis facere cum
            laborum! Vel perspiciatis quasi debitis possimus odit recusandae,
            impedit consequatur minima dolor nihil eveniet praesentium facere
            harum cupiditate asperiores! Atque, eveniet sapiente delectus
            reprehenderit fuga est accusantium at, nemo fugiat quae laborum.
            Quod ratione magnam sed fugiat consectetur quas id nulla vero?
            Nostrum tempora numquam officiis neque itaque quaerat molestiae
            dolor eos rerum in quibusdam, eveniet aliquam. Nulla voluptas nobis
            placeat error quis dolor ratione illo soluta maxime! Inventore quam
            reiciendis deleniti dolores magni, repudiandae eligendi veritatis
            animi corporis unde, accusantium harum. Est vel, quo eos rem fuga
            reiciendis suscipit repellendus voluptatem odio distinctio earum
            iure totam dignissimos sint numquam? Hic neque facere officiis
            beatae, laborum enim corrupti quidem reprehenderit et animi ipsa
            iste nobis quis qui impedit consectetur accusantium at soluta.
            Facilis asperiores sunt quaerat voluptatum nisi pariatur molestiae
            quia! Maiores quod voluptate facere, veniam aperiam porro quasi
            fugiat culpa ullam natus exercitationem? Voluptatibus, officiis
            ratione. Reprehenderit itaque suscipit reiciendis a explicabo saepe
            minima! Recusandae dolorem minus voluptatum numquam debitis soluta
            culpa odit quaerat earum laudantium incidunt tempora nisi ad sint,
            eum tempore vitae! Ut nostrum minus illo eos blanditiis veniam,
            iusto deleniti odio commodi vitae cum a iste, ratione repellat
            corrupti nesciunt architecto repellendus dicta modi perspiciatis
            officia quod optio laudantium. Laborum amet vitae temporibus
            aspernatur ducimus? Aut corrupti tempore expedita autem, laborum
            tempora fugiat non atque itaque quis, repellendus inventore. Quam
            animi quos maxime quaerat aliquid deserunt in itaque quae repellat
            odit ea iusto tenetur vero consequuntur, possimus dolores eveniet
            debitis consectetur porro commodi distinctio ipsum vel quia optio.
            Illo quibusdam, commodi error cupiditate, eaque perferendis
            laudantium porro sequi hic cum dolorum corporis quia veniam, unde
            molestias! Quaerat assumenda fugiat laborum cupiditate, deserunt
            suscipit ullam nemo possimus, in modi recusandae voluptate commodi,
            eligendi aliquam hic.
          </p>
        </Modal>
      )}
      <p style={{ textAlign: "center", fontSize: 16 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea
        natus non et? Unde dolorum pariatur ea numquam hic facilis!
      </p>
    </>
  );
};
