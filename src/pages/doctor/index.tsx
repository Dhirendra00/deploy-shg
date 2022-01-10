import React from "react";
import withAuth from "@/shared/withAuth";
import { DoctorLayout } from "@/layout/DoctoLayout";
// import {Accordion} from "@/components/Accordion/useAccordion"
// import {Formik,Field, Form} from "formik"
// import {UnitInput} from "@/components/Input"
// import { Button } from "@/components/Button";

const DoctorDashboard: React.FC = () => {
  return (
    <DoctorLayout>
      This will be later designed for home page for doctors
      {/* <Accordion>
        <Accordion.Button>Open First</Accordion.Button>
        <Accordion.Panel>Contents of firt accordion Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias, dolore voluptate facilis vero excepturi magni corrupti consequatur repudiandae sunt ratione distinctio deserunt nemo, tenetur dolorum. Culpa, placeat quo! Blanditiis ratione architecto laborum perferendis ipsam neque velit dicta nostrum amet facilis. Nisi, possimus temporibus, voluptatem nemo distinctio sit pariatur facere repellendus libero mollitia cupiditate impedit odio suscipit, id animi consequuntur. Esse ducimus quis quam, illo delectus temporibus officia. Beatae magni nisi magnam, natus incidunt, eveniet excepturi repudiandae reiciendis dolores cum officiis! Harum nam quidem doloremque optio beatae quas voluptas sit pariatur est accusantium ut temporibus, dolorem suscipit possimus necessitatibus facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo distinctio quam consectetur sequi, velit repellat! Porro dignissimos ipsa possimus distinctio dicta hic praesentium quae quos eius dolore, accusantium labore maiores modi natus non asperiores repellat maxime! Quia officiis quo ex enim voluptates libero laborum porro maiores explicabo provident excepturi vel accusantium harum tempora voluptatibus id quae dolor molestias totam dolore rem, asperiores ad ipsa labore. Quo quam sint aut nulla dolores ducimus possimus id ad quis eos doloremque at beatae voluptas dolor veritatis suscipit libero voluptates neque recusandae commodi, doloribus officiis totam voluptate nisi? Pariatur, ex. Reprehenderit, ab, deleniti minus ipsum dolorum vero placeat consequuntur qui itaque explicabo consequatur voluptate laborum eius natus ipsam at id nam, rem eum nulla? Ratione enim at, maiores iusto velit doloremque? Suscipit inventore veritatis nesciunt culpa reprehenderit tempora nobis eligendi, necessitatibus quibusdam nulla dolores vero ipsam in, maiores error sit at provident animi ipsa cumque! Laboriosam ullam perspiciatis cum beatae blanditiis, adipisci esse sint velit, minus eligendi perferendis cupiditate molestiae debitis maxime voluptates nulla! Voluptates eum, recusandae tempore deleniti adipisci tempora architecto, provident incidunt praesentium illo labore unde neque distinctio! Architecto quidem, libero quia atque asperiores blanditiis animi ab nemo culpa ad provident.</Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Button >Open First</Accordion.Button>
        <Accordion.Panel>{<VitalModalContent />}</Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Button>Open First</Accordion.Button>
        <Accordion.Panel>Contents of firt accordion</Accordion.Panel>
      </Accordion> */}
    </DoctorLayout>
  );
};

export default withAuth(DoctorDashboard);
