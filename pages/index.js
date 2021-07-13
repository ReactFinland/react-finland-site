import React from "react";
import {
  AnchorHeader,
  connect,
  ContactMini,
  Contacts,
  Markdown,
} from "components";

const intro = `React Finland 2021 will take place between 30th of August and 3rd of September.

The conference sessions take place online due to the exceptional circumstances. We'll run the conference in a vodcast format that works out like this:

* Each session is scoped to a specific theme
* There will be a host and three speakers
* The sessions take ~1.5h and there's a 15 minute slot to demo and present for each speaker
* You can send your questions and comments through YouTube and Twitch and we'll cover them live during the sessions

In addition, we offer a variety of [online workshops](/workshops/).

> [Learn more from the conference announcement](/blog/react-finland-2021/).`;

/*
const pastEvents = `
## Past events

* The fifth vodcast took place 29th of June 2021 and it focused on design tools.
* The fourth vodcast took place 26th of May 2021 and it focused on Next.js.
* The third vodcast took place 29th of April 2021 and it focused on full stack React.
* The second vodcast took place 29th of March 2021 and it focused on accessibility.
* The first vodcast took place 24th of February 2021 and it focused on React components.
* [The fifth online mini-conference](/blog/rf-2020-online-mini-conf-vol-5-recap/) took place 2nd of December and it was about performance.
* [The fourth online mini-conference](/blog/rf-2020-online-mini-conf-vol-4-recap/) took place 28th of October and it was about lessons learned.
* [The third online mini-conference](/blog/rf-2020-online-mini-conf-vol-3-recap/) took place 22nd of September and it was about design systems.
* [The second online mini-conference](/blog/rf-2020-online-mini-conf-vol-2-recap/) took place 27th of August and it was about state management.
* [The first online mini-conference](/blog/rf-2020-online-mini-conf-vol-1-recap/) took place 28th of May and it was about documentation.
`;

const rf2021 = `
## React Finland 2021

React Finland 2021 conference tickets are now available:

- The conference will take place 24-28.05.2021. The workshops will run 24-26.05 and the conference 27-28.05.
- We'll follow a similar format as earlier so the conference will be on a single track although we'll likely branch during the breaks into more impromptu sessions, QAs, and relaxation.
- The price of the conference portion begins from 399 € (inc. VAT) and it's available now. Once these tickets run out, the late price is going to be 499 €.
- Unlike usually, this time we have less tickets available, roughly 150 in total. That's due to ticket transfers to 2021.
- The workshops will be announced at a later time, likely during the Fall, as we have more information available.

> [Learn more about RF2021 from the announcement](/blog/rf-2021/)
`;
*/

/*
const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).

[Join React Finland Slack to connect with other attendees!](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTI3MjZlZGNjNTNkOTU5N2E1OWYxYzY0MWE0Y2NiNWMxMWZiMWEyYjc4MmM1ZDQwZmFhOTkyODBmM2E4NjcxZjM)
`;
*/

const domain = "deploy-preview-79--react-finland.netlify.app"; // Try localhost locally
const id = "mw-1YdqZLQo"; // For youtube video id

const Index = () => (
  <div className="intro" style={{ width: "100%" }}>
    <div className="intro--main" style={{ width: "100%" }}>
      <AnchorHeader level={2}>Past vodcasts</AnchorHeader>
      <section className="flex-row">
        <iframe
          title="Vodcast – Test stream"
          width="60%"
          height="400"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          title="Vodcast – Test stream chat"
          width="40%"
          height="400"
          src={`https://www.youtube.com/live_chat?v=${id}&embed_domain=${domain}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
    </div>
  </div>
);

export default connect(
  `
fragment SpeakerFragment on Contact {
  name
  about
  social {
    homepage
    github
    twitter
    linkedin
  }
  image {
    url
  }
}

query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    mcs {
      ...SpeakerFragment
    }
    keynoteSpeakers {
      ...SpeakerFragment
    }
    speakers {
      ...SpeakerFragment
    }
    lightningTalkSpeakers {
      ...SpeakerFragment
    }
    workshopInstructors {
      ...SpeakerFragment
    }
  }
}
`,
  () => ({
    // TODO: Get this through config
    conferenceId: "react-finland-2021",
  })
)(Index);
