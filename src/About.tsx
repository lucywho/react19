import { useActionState } from 'react';
import { updateNameInDB } from './api';

const About = () => {
  const [name, actionFunction, isPending] = useActionState(
    formAction,
    localStorage.getItem('name') || 'Anonymous user'
  );

  async function formAction(prevState: string | undefined, formData: FormData) {
    try {
      const firstname = formData.get('firstname');
      const lastname = formData.get('lastname');
      const name = `${firstname} ${lastname}`;
      if (name !== null) {
        const newName = await updateNameInDB(name as string);
        return newName;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id='about-form'>
      <h2 className='username'>
        Current user: <span id='user-name'>{name}</span>
      </h2>
      <form action={actionFunction}>
        <section className='form-section'>
          <label htmlFor='name1'>Name:</label>
          <input type='text' id='name1' name='firstname' required />
        </section>
        <section className='form-section'>
          <label htmlFor='name2'>Family Name:</label>
          <input type='text' id='name2' name='lastname' required />
        </section>
        <button type='submit' className='form-section'>
          Update
        </button>
      </form>
    </section>
  );
};

export default About;
