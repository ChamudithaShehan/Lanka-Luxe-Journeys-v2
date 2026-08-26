'use server';

import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { createSession, deleteSession } from '@/lib/session';

export async function loginAction(
  _state: { error?: string } | undefined,
  formData: FormData
): Promise<{ error?: string }> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  const user = await prisma.adminUser.findUnique({ where: { email } });

  if (!user) {
    return { error: 'Invalid email or password.' };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return { error: 'Invalid email or password.' };
  }

  await createSession(user.id, user.email);
  redirect('/admin');
}

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect('/admin/login');
}
