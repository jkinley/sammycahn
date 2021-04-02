import React from 'react'
import styled from 'styled-components';

const TitaNote = () => {
  return (
    <section className="py-24">
    <div className="container mx-auto px-8 md:w-3/5">
      <Columns>
        <p className="mb-4">My husband was what’s known as a piece of work. Anyone who knew him would tell you he was crazy.</p>

        <p className="mb-4">He was crazy clean, crazy neat, crazy everything in its right place, with labels that he typed! But overriding all of this—he was crazy for music. He said music spoke to him and the words just wrote themselves, while I argued for 22 years that this was a great underestimation of his remarkable abilities.</p>

        <p className="mb-4">He was crazy for music and lyrics, for singers and songwriters, for pianists, rehearsal studios and recording sessions. In fact, anywhere there was a singer and a piano, he’d rather be there than home with me. But that was fine because when he did come home, he was always so filled with excitement and enthusiasm that it spilled over into my own life. No wife can want more than a husband who loves the thing he does.</p>

        <p className="mb-4">But in remembering him, it's important to know that the fast-talking, wise-cracking man who entered the room was only the front man—the person who guarded the more fragile sides of Sammy.</p>

        <p className="mb-4">So while its easy to remember “If you can use, some exotic booze, there’s a bar in far Bombay". It's smart and hip and funny—all the things Sammy was. But it's just as important to remember the passion of Sammy: “I’ll always be near you, wherever you are, each night in every prayer, If you call I’ll hear you, no matter how far, just close your eyes and I’ll be there".</p>

        <p className="mb-4">Or the heartache of" “I’ll only miss her when some stranger laughs, ‘cause its still her laugh my heart hears. Maybe in time I guess, the longing will grow the slightest bit less, and there will be moments, yes, when it disappearsI bet I forget her completely, in about a hundred years.“ </p>

        <p className="mb-4">Or the unabashed sentiment of “September of My Years“: “As a man who has always had the wandering ways, now I'm reaching back for yesterdays, ‘til a long forgotten love appears, and I find I'm sighing softly as I reach September.</p>

        <p className="mb-4">All of this is Sammy Cahn. Dont let him fool you.</p>

        <p className="font-bold">Tita Cahn</p>

      </Columns>
    </div>
  </section>
    
  );
};

const Columns = styled.div`
	column-count: 1;
  column-gap: 3rem;

  @media (min-width: 1024px) {
    column-count: 2;
    column-gap: 6rem;
  }

 
`;

export default TitaNote;
