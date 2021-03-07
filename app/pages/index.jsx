import React from 'react';
import Typist from 'https://esm.sh/react-typist';
import './index.css';
import Hand from '../components/hand.tsx';
function delayGenerator(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
  if (charIdx === line.length - 1) {
    return 500;
  }
  return defDelayGenerator();
}

export default function Home() {
  return (
    <div className='page index'>
      <Typist
        delayGenerator={delayGenerator}
        className='typist'
        cursor={{
          show: false,
          // blink: true,
          // element: '|',
          // hideWhenDone: false,
          // hideWhenDoneDelay: 1000,
        }}
        avgTypingDelay={60}
      >
        <div>
          Hi <Hand />
        </div>
        {/* <Typist.Backspace count={4} delay={500} /> */}
        {/* <Typist.Delay ms={600} /> */}

        <div>I am a code developer,</div>
        {/* <Typist.Delay ms={400} /> */}

        <div>a web artist in love with minimalism.</div>
        {/* <Typist.Delay ms={400} /> */}

        <div>
          My thoughts are on{' '}
          <a className="twitter" href='https://twitter.com/jupegarnica'>twitter</a>
        </div>
        {/* <Typist.Delay ms={400} /> */}

        <div>
          And some of my work at{' '}
          <a className="github" href='https://github.com/jupegarnica'>github</a>
        </div>
      </Typist>
      {/* <div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={()=>setMsg(true)}
        >
          <a href={''}>React Typist</a>
        </Typist>
        <div className="TypistExample-content">
          {msg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              * Easy to style
              // <Typist.Delay ms={1250} />
              <br />
              * Easy to customize
              <Typist.Delay ms={1250} />
              <br />
              * Easy to use backp<Typist.Delay ms={500} />sace
              <Typist.Backspace count={5} delay={1000} />
              <Typist.Delay ms={750} />
              space
              <Typist.Delay ms={1250} />
              <br />
              <span>* <a href={'api/version'} className="flash">docs</a></span>
              <br />
              {''}
            </Typist>
          ) : null }
        </div>
      </div> */}
    </div>
  );
}
