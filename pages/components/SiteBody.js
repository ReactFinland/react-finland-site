import React from "react";
import { content } from "@react-finland/content-2018";
import {
  AnchorContext,
  AnchorHeader,
  Contacts,
  Header,
  Footer,
  Markdown,
  Sponsor,
  Subscribe,
} from "./";

let { partners, goldSponsors, silverSponsors, bronzeSponsors } = content;

import "normalize.css/normalize.css";
import "../../styles/fontello-codes.css";
import "../../styles/fontello-embedded.css";
import "../../styles/style.scss";

// Tweak Motley
silverSponsors = silverSponsors.map(sponsor => {
  if (sponsor.name === "Motley") {
    return {
      ...sponsor,
      logoProps: {
        style: {
          background: "transparent",
          padding: "1em",
        },
      },
    };
  }
});

// Tweak Rohea
bronzeSponsors = bronzeSponsors.map(sponsor => {
  if (sponsor.name === "Rohea") {
    return {
      ...sponsor,
      logoProps: {
        style: {
          background: "black",
          padding: "1em",
        },
      },
    };
  }
});

const SiteBody = ({
  children,
  section,
  location: { pathname },
  page: { file: { title } },
}) => (
  <AnchorContext>
    <main>
      <Header pathname={pathname} title={title} />
      <div className="main-container container">
        <section className="grid grid_6col">
          {children}
          <div className="grid--full">
            <div className="sponsors sponsors_gold">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥇 Gold Sponsors
              </AnchorHeader>
              <section className="sponsors--list">
                <Contacts items={goldSponsors} render={Sponsor} />
                {goldSponsors.length < 2 && (
                  <a href="/for-sponsors/">Become a sponsor</a>
                )}
              </section>
            </div>
            <div className="sponsors sponsors_silver">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥈 Silver Sponsors
              </AnchorHeader>
              <section className="sponsors--list">
                <Contacts items={silverSponsors} render={Sponsor} />
                {silverSponsors.length < 3 && (
                  <a href="/for-sponsors/">Become a sponsor</a>
                )}
              </section>
            </div>
            <div className="sponsors sponsors_bronze">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥉 Bronze Sponsors
              </AnchorHeader>
              <section className="sponsors--list">
                <Contacts items={bronzeSponsors} render={Sponsor} />
                {bronzeSponsors.length < 4 && (
                  <a href="/for-sponsors/">Become a sponsor</a>
                )}
              </section>
            </div>
          </div>

          <AnchorHeader level={2}>Partners</AnchorHeader>
          <div className="sponsors sponsors_partners grid--full">
            <section className="sponsors--list">
              <Contacts items={partners} render={Sponsor} />
            </section>
          </div>
        </section>
      </div>
      <Subscribe />
      <Footer />
    </main>
  </AnchorContext>
);

export default SiteBody;
