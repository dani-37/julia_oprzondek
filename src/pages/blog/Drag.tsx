import React from "react";
import BlogPost from "./Template.tsx";
import "./blog.css";

const Content = () => (
  <>
    <div className="mt-10 sm:max-w-[70%] sm:mx-auto flex flex-col items-center font-thin">
      <header className="mb-10 text-[1.4rem] text-center font-bold">
        "Gay men are opinionated. Drag queens are opinionated. Artists are
        opinionated. Put it all together, it’s like a ticking bomb."
      </header>
      <p>
        To succeed in the drag world, you need to commit your whole self. And
        during his first two years, Ian Gill did anything he had to do. After
        graduating from Virginia Commonwealth University, he got a job in
        administration at his alma mater with “salary and benefits, and all that
        crap.” But at the same time, he had his drag job - so, he worked 20
        hours a day. “I would go straight from work to do the show, finish it at
        3am in the city, drive home from the city, and then drive back and be
        back at work at 7am.”
      </p>
      <p>
        After one of his bosses, who “weren’t very good people,” made a suicidal
        joke, he deemed it a sign from the universe: “This is the time to just
        quickly give in your resignation and get going.” And so, about a month
        ago, he quit.
      </p>
      <p>
        We managed to meet while he was visiting his family. In a small café in
        North London, he reminisced about his drag journey and was as honest as
        one can be. At 23 years old, he is a full-time drag queen. His stage
        alter ego is London Lestrange, named partly as a reference to his
        British upbringing, and partly as an ironic take on London Tipton, a
        character from ‘Suite Life of Zack and Cody,’ the 2000’s Disney Channel
        series. “In the show, she is rich and beautiful but stupid. I wanted to
        create a character that was pretty but intelligent as well,” he
        explained. “I wanted to give that name a different meaning. And
        Lestrange is, of course, from Harry Potter.
      </p>
      <p>
        ”His drag beginnings weren’t easy. He admitted having no memory of his
        first live show: “I totally blacked out and went completely on
        autopilot.” And although his first performance didn’t herald a bright
        drag career, things have been going “really well so far.” In drag, he is
        not afraid of being himself and doesn’t follow the trends. As an
        example, while most queens use bright neon colours to gain attention, he
        limits himself to red, black and white. These were his favourite
        childhood colours which he now made his “brand.” He is currently a
        regular performer at Godfrey’s, the bar which is the American drag
        mecca, located in Richmond, Virginia. It is a place where the industry
        is flourishing. “We have a ton of queens here. It’s a blooming and
        oversaturated situation at the moment. It’s quite competitive.”
      </p>
      <p>
        Social media is to blame for that. It introduced drag culture to a new
        audience and gave rise to a new generation of performers. “If somebody
        wanted to do drag, anyone can do it. It’s both a blessing and a curse.”
      </p>
      <p>
        The increased presence of drag performers on both social media and
        television slowly changed the stigma around this craft. But it also led
        to disagreements between the old and new school of drag. “Lots of the
        new girls disregard and discredit all the people who have come before us
        and created this path that we can now revel in.”
      </p>
      <p>
        What also leads to tensions is the confidence, colourfulness and
        outspokenness of the performers. “Gay men, in general, are opinionated.
        Drag queens are opinionated, Artists areopinionated. Put it all
        together, it’s a ticking bomb,” he said, laughing. “But it’s an art
        form. And in any art form, some people have some strong feelings, and
        have a need to speak” Gill, on the other hand, has a different attitude
        to such disagreements. After one drag queen criticised him online for
        wearing too little make-up, he kindly answered: “Thank you for the
        critique. Have a nice day.”
      </p>
      <p>
        Today, with his life revolving around drag, he is living his best life -
        but it’s not the easiest, as he frankly admitted. “Because of constant
        performing, I’m in a lot of pain. I’m sore, I’m exhausted. There are
        days when it’s a real, real job. But for the most part, it’s a pretty
        good time.”
      </p>
    </div>
  </>
);

const Description = () => (
  <>
    <p className="  font-thin text-sm">
      A profile of Ian McGill, known professionally as London Lestrange. He is
      based in Richmond, Virginia, and told me about the local drag culture and
      how he gained confidence in his craft.
    </p>
    <p className="  font-thin text-sm">
      It was one of my favourite pieces because I got to explore a topic that I
      was personally interested in. Having watched many drag shows, I knew how
      much work goes into the costumes, gigs, and their stage presence.
    </p>
    <p className="  font-thin text-sm -mb-8">
      That is exactly why I chose to write about it for my Feature Writing class
      in my second year of university. With RuPaul’s Drag Race coming to the UK
      in 2019, I wanted to bring the drag craft to the readers and shed a
      spotlight on the dedication required from the performers.
    </p>
  </>
);

const Drag = () => {
  return (
    <BlogPost
      title="Drag queens and social media"
      description={<Description />}
      image="drag"
      content={<Content />}
    />
  );
};

export default Drag;
