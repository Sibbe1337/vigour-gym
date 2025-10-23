import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, goal, message } = body

    // Log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      goal,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email using Resend or another service
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({
    //     from: 'noreply@vigourgym.com',
    //     to: process.env.CONTACT_EMAIL || 'info@vigourgym.com',
    //     subject: `New Contact Form Submission from ${name}`,
    //     html: `
    //       <h2>New Contact Form Submission</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //       <p><strong>Goal:</strong> ${goal}</p>
    //       <p><strong>Message:</strong> ${message || 'N/A'}</p>
    //     `,
    //   })
    // }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
