import { z } from 'zod'

const projectTypes = ['Digital Experience', 'Product Engineering', 'Backend System', 'AI & Automation', 'Other'] as const
const budgets = ['Under $5K', '$5K–$15K', '$15K–$50K', '$50K+', 'Not sure'] as const

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80, 'Name is too long.'),
  email: z.string().trim().email('Enter a valid email address.'),
  company: z.string().trim().max(120, 'Company name is too long.').optional().or(z.literal('')),
  projectType: z.enum(projectTypes, { error: 'Choose a project type.' }),
  budget: z.enum(budgets, { error: 'Choose an estimated budget.' }),
  description: z.string().trim().min(20, 'Tell us a little more about the project.').max(4000, 'Description is too long.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
