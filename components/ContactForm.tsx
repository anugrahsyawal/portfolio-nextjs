"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function ContactForm() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Tangkap ID toast di sini
    const toastId = toast.loading('Sending message...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        // 2. Perbarui toast SUKSES menggunakan ID
        toast.success('Message sent successfully!', { id: toastId });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(result.error || 'Failed to send message.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      // 3. Perbarui toast ERROR menggunakan ID
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

 return (
 <Card className='bg-background p-6'>
 <form onSubmit={handleSubmit} className='space-y-4'>
 <div>
 <label htmlFor='name' className='block text-sm font-medium mb-2'>Your Name</label>
 <Input
 id='name'
 placeholder='Anugrah Syawal'
 value={name}
 onChange={(e) => setName(e.target.value)}
 required
 disabled={isLoading}
 />
 </div>
 <div>
 <label htmlFor='email' className='block text-sm font-medium mb-2'>Your Email</label>
 <Input
 id='email'
 type='email'
 placeholder='nugrahsyawal@gmail.com'
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 disabled={isLoading}
 />
 </div>
 <div>
 <label htmlFor='message' className='block text-sm font-medium mb-2'>Your Message</label>
 <Textarea
 id='message'
 placeholder='Saya tertarik untuk...'
 value={message}
 onChange={(e) => setMessage(e.target.value)}
 required
 disabled={isLoading}
 />
 </div>
 <Button
 type='submit'
 className='w-full bg-green-500 hover:bg-green-600'
 disabled={isLoading}
 >
 {isLoading ? 'Sending...' : 'Send Message'}
 </Button>
 </form>
 </Card>
 );
}