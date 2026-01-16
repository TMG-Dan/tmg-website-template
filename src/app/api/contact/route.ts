import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { sendContactNotification } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = validationResult.data

    // Send email notification (optional - will fail gracefully if not configured)
    if (process.env.RESEND_API_KEY) {
      const emailResult = await sendContactNotification({
        name,
        email,
        phone: phone || undefined,
        message,
      })

      if (!emailResult.success) {
        console.error('Failed to send notification email:', emailResult.error)
        // Don't fail the request if email fails - the submission is still valid
      }
    }

    // TODO: Store submission in Convex when properly configured
    // For now, just log the submission
    console.log('Contact form submission:', { name, email, phone, message })

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
