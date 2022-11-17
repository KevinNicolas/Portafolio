import { ExitPresence } from "@components";
import { motion } from "framer-motion";

import { AboutmeStyles } from "./About-me.styles";

export const AboutMe = () => {
  return (
    <ExitPresence>
      <AboutmeStyles>
        <motion.div className="title-container" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
          <h3>Acerca de mi</h3>
        </motion.div>
        <div className="content">
          <motion.div
            className="brand"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
          >
            <img src="/images/avatar.png" alt="Avatar image" className="avatar-image" />
            <span>
              <span className="highlight">Frontend</span> developer
            </span>
          </motion.div>
          <motion.div className="about-me" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis qui ipsa voluptate tenetur deserunt a repudiandae iste fugiat blanditiis facere, libero labore in
              quos. Dignissimos suscipit omnis alias ullam natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptatem deleniti sunt, labore voluptatum
              autem praesentium quis laudantium placeat natus quibusdam rerum maxime blanditiis quos necessitatibus accusantium, corporis numquam non! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minima, officiis, consequatur nesciunt nostrum beatae id ipsum exercitationem iure dolores accusantium, ad explicabo! Omnis
              necessitatibus iure nemo recusandae cum, est ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores eveniet, corporis vitae repellat quos
              voluptatum unde quaerat animi minima doloremque necessitatibus, optio temporibus, accusamus quidem officia sunt voluptatem ipsam. Quia esse reprehenderit labore,
              perferendis, harum non eligendi similique ut, eius aliquam aspernatur consequatur quisquam inventore ratione. Earum pariatur nam exercitationem similique, error
              debitis odio reprehenderit autem ratione tenetur alias? Suscipit neque at officiis, rerum cum autem? Animi impedit quis labore. Vel, omnis laboriosam voluptate et
              suscipit, repellat quidem eveniet blanditiis numquam impedit nisi sed? Fuga magni quasi voluptates doloribus! Officia modi omnis ratione laborum quidem perspiciatis
              sit sunt, delectus, iure rerum dolorem odit ipsa eligendi? Molestias doloremque natus nisi consectetur magni eveniet dolores dolor! Cumque ratione nesciunt quam esse.
            </p>
          </motion.div>
        </div>
      </AboutmeStyles>
    </ExitPresence>
  );
};
