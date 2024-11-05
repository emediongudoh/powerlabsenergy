import { useState } from 'react';

// Components import
import SectionHeader from '../common/SectionHeader';
import ContactInput from './ContactInput';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ name, email, phone, service, message });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='col-span-full flex flex-col gap-5 md:col-span-8'
        >
            <SectionHeader
                subtitle='Contact us'
                textAlign='left'
            />

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <ContactInput
                    placeholder='Your name'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <ContactInput
                    placeholder='Your email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <ContactInput
                    placeholder='Phone number'
                    type='tel'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <select
                    name='service'
                    id='service'
                    className='border-none bg-brand_gray p-4 shadow-[3px_3px_0px_black] outline-none focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none'
                    value={service}
                    onChange={e => setService(e.target.value)}
                >
                    <option value=''>Choose service</option>
                    <option value='Repair of Faulty Units'>
                        Purchase a Unit
                    </option>
                    <option value='Repair of Faulty Units'>
                        Repair of Faulty Units
                    </option>
                    <option value='Installation'>Installation</option>
                    <option value='Supply of Solar Panels'>
                        Supply of Solar Panels
                    </option>
                    <option value='Customer Care'>Customer Care</option>
                </select>
            </div>

            <textarea
                name='message'
                id='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Write text here...'
                className='mt-4 h-48 w-full rounded-md border-none bg-brand_gray p-3 outline-none focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none'
            ></textarea>

            {/* Submit button */}
            <button
                type='submit'
                className='w-fit rounded-full bg-brand_color px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            >
                Send message
            </button>
        </form>
    );
}

export default ContactForm;
