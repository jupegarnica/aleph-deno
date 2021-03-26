import React, {useState} from 'react';
import Typist from 'https://esm.sh/react-typist';
// import './index.css';
import Hand from '../components/hand.tsx';
function delayGenerator(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
  if (charIdx === line.length - 1) {
    return 500;
  }
  return defDelayGenerator();
}

export default function Home() {
  const [animated, animate] = useState(false)
  return (
    <section className={'page index ' +( animated ? 'animated': '') }>
      <Typist
        delayGenerator={delayGenerator}
        className='typist'
        cursor={{
          show: false,
        }}
        onTypingDone={() => animate(true)}
        avgTypingDelay={60}
      >
        <div>
          Hi <Hand />
        </div>
        <div>I love devops</div>
        <div>I am a code developer,</div>

        <div>a web artist in love with minimalism.</div>

        <div>
          My thoughts are on{' '}
          <a className="twitter" href='https://twitter.com/jupegarnica'>twitter</a>
        </div>

        <div>
          And some of my work at{' '}
          <a className="github" href='https://github.com/jupegarnica'>github</a>
        </div>
      </Typist>
      <div className="background"></div>

    </section>
  );
}
