import React from 'react';
import { useActionState, useOptimistic } from 'react';
import { updateNameInDB } from './api';
import SubmitButton from './SubmitButton';

type stateType = {
  error: Error | null;
  name: string;
};

const About = () => {
  const [state, actionFunction, isPending] = useActionState(updateName, {
    error: null,
    name: localStorage.getItem('name') || 'Anonymous user',
  });

  const [optimisticName, setOptimisticName] = useOptimistic(state?.name);

  async function updateName(
    prevState: stateType | undefined,
    formData: FormData
  ) {
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const name = `${firstname} ${lastname}`;

    setOptimisticName(name);

    try {
      if (name !== null) {
        const newName = await updateNameInDB(name as string);
        return {
          error: null,
          name: newName,
        };
      }
    } catch (error) {
      return {
        error: error as Error,
        name: prevState?.name as string,
      };
    }
  }

  return (
    <section id='about-form'>
      <h2 className='username'>
        Current user: {state && <span id='user-name'>{optimisticName}</span>}
      </h2>
      <p id='user-message'>
        {/* {isPending && <span>Updating ...</span>} --> user feedback message no longer needed as display updates immediately */}
        {state?.error && !isPending && <span>{state.error.message}</span>}
      </p>
      <form action={actionFunction}>
        <section className='form-section'>
          <label htmlFor='name1'>Name:</label>
          <input type='text' id='name1' name='firstname' required />
        </section>
        <section className='form-section'>
          <label htmlFor='name2'>Family Name:</label>
          <input type='text' id='name2' name='lastname' required />
        </section>
        <SubmitButton type='submit' className='form-section user-name-submit'>
          Update
        </SubmitButton>
      </form>
    </section>
  );
};

export default About;
