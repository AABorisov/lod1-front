import * as React from 'react';

import styles = require('./styles.scss');
import classnames from 'classnames';
import Form from "./Form";
import Avatar from "./Avatar";
import Ticket from "./Ticket";
import SelectTags from "./SelectTags";

interface User {
  first_name: string;
  last_name: string;
  avatar: number | null;
  is_admin: boolean;
  is_guest: boolean;
  is_investor: boolean;
  is_startup: boolean;
  is_user: boolean;
  job_title: string;
  firma_name: string;
  interests: Array<string>;
  goals: Array<string>;
}

interface Field {
  name: string;
  label?: string;
  options?: Array<string>;
}

export interface StepProps {
  fields: Array<Field>;
  user: User;
  onChange: Function;
}

const Registration: React.FC<{}> = () => {
  const steps = [
    {
      id: 1,
      title: "Welcome",
      description: 'Use your real name',
      fields: [
        {
          title: "First name",
          name: 'first_name'
        },
        {
          title: "Second name",
          name: 'second_name'
        },
      ]
    },
    {
      id: 2,
      title: "Choose Your Avatar",
      fields: [
        {
          name: 'avatar'
        }
      ]
    },
    {
      id: 3,
      title: "My Description",
      description: 'Enter your current title and organization',
      fields: [
        {
          title: "title",
          name: 'job_title'
        },
        {
          title: "Organization",
          name: 'firma_name'
        },
      ]
    },
    // {
    //   id: 4,
    //   title: "My Interests",
    //   description: 'Help us show you relevant matches',
    //   fields: [
    //     {
    //       name: "interests",
    //       options: ['#Entrepreneurship', '#Startups', '#Networking', '#Technology', '#Innovation', '#OnlineRetail']
    //     }
    //   ]
    // },
    // {
    //   id: 5,
    //   title: "My Goals",
    //   description: 'How can the community help you?',
    //   fields: [
    //     {
    //       name: "goals",
    //       options: ['Hire employees', 'Find co-founders', 'Find investors', 'Invest in projects', 'Find mentors', 'Mentors others']
    //     }
    //   ]
    // },
    {
      id: 6,
      title: "My Ticket",
      description: 'Choose your ticket',
      fields: [
        {
          name: "is_guest",
          title: "Guest",
        },
        {
          name: "is_user",
          title: "User",
        },
        {
          name: "is_investor",
          title: "Investor",
        },
        {
          name: "is_startup",
          title: "Startup",
        },
      ]
    },
  ];

  const [stepIndex, setStepIndex] = React.useState<number>(0);
  const [user, changeUser] = React.useState<User>({
    first_name: "",
    last_name: "",
    avatar: 1,
    is_admin: false,
    is_guest: false,
    is_investor: false,
    is_startup: false,
    is_user: false,
    job_title: "",
    firma_name: "",
    interests: [],
    goals: [],
  });


  const onPrevClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setStepIndex(stepIndex - 1);
  }

  const onNextClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      setStepIndex(stepIndex + 1);
  }

  let step = steps[stepIndex];

  const renderMain = (index: number): JSX.Element | Array<JSX.Element> => {
    switch (index) {
      case 1:
      case 3:
        return <Form fields={step.fields} user={user} onChange={changeUser} />
      case 2:
        return <Avatar fields={step.fields} user={user} onChange={changeUser} />
      case 4:
      case 5:
        return <SelectTags fields={step.fields} user={user} onChange={changeUser} />
      case 6:
        return <Ticket fields={step.fields} user={user} onChange={changeUser} />
    }
  }

  return <div className={styles.registration}>
    <img alt="" className={styles.bg1} src={`public/assets/registration/${step.id}_1.png`}/>
    <img alt="" className={styles.bg2} src={`public/assets/registration/${step.id}_2.png`}/>
    <div className={styles.popup}>
      <header className={styles.header}>{step.title}</header>
      {step.description && <div className={styles.description}>{step.description}</div>}
      <main className={styles.main}>
        { renderMain(step.id) }
      </main>
      <footer className={ styles.buttons }>
        <button className={ classnames(styles.prev, {
          [styles.inactive]: stepIndex === 0
        }) } onClick={onPrevClick}>back</button>
        <button className={ classnames(styles.next, {
          [styles.inactive]: stepIndex === 0
        }) } onClick={onNextClick}>{ stepIndex > steps.length ? 'submit' : 'next' }</button>
      </footer>
    </div>
  </div>;
}

export default Registration;
