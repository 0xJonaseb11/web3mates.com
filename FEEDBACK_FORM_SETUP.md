# General Feedback Form Setup

This guide explains how to set up the general feedback form using Formspree, consistent with your existing form handling approach.

## Overview

The general feedback form allows users to share ideas, suggestions, and feedback about Web3 Mates. It's integrated with Formspree for reliable email handling and includes proper validation and user feedback.

## Features

- **Formspree Integration**: Uses Formspree for email handling (consistent with other forms)
- **Real-time Validation**: Input validation with helpful error messages
- **Toast Notifications**: User feedback for form submission status
- **Responsive Design**: Works seamlessly on all devices
- **Accessibility**: Proper form labels and error handling

## Setup Instructions

### 1. Environment Variable

Add this to your `.env.local` file:

```bash
NEXT_PUBLIC_FORMSPREE_FEEDBACK_URL=https://formspree.io/f/YOUR_FEEDBACK_FORM_ID
```

### 2. Formspree Setup

1. Go to [formspree.io](https://formspree.io) and create a new form
2. Choose "Contact Form" as the form type
3. Copy the form URL and add it to your environment variable
4. Configure email notifications in Formspree dashboard

### 3. Formspree Configuration

In your Formspree dashboard:

- **Form Settings**: Set form name to "General Feedback"
- **Email Notifications**: Configure who receives the feedback
- **Auto-replies**: Set up automatic confirmation emails
- **Spam Protection**: Enable Formspree's built-in spam protection
- **Rate Limiting**: Configure submission limits if needed

### 4. Email Template

The form sends the following data:
- `form_type`: "general_feedback"
- `feedback`: User's feedback text (5-1000 characters)

### 5. Validation Rules

- **Minimum length**: 5 characters
- **Maximum length**: 1000 characters
- **Required field**: Yes
- **Content filtering**: Basic spam and content validation

## Testing

1. Fill out the feedback form on the collaboration page
2. Submit with valid data (should show success message)
3. Test validation with short/invalid input
4. Check Formspree dashboard for submissions
5. Verify email notifications are working

## Troubleshooting

### Common Issues

1. **Form not sending**: Check your Formspree form URL and configuration
2. **Validation errors**: Ensure feedback meets length requirements (5-1000 characters)
3. **Email not received**: Check Formspree dashboard and email settings
4. **Toast not showing**: Verify useToast hook is properly imported

### Debug Steps

1. Check browser console for errors
2. Verify environment variable is set correctly
3. Test Formspree form URL directly
4. Check network tab for failed requests
5. Verify Formspree form is active and not paused

## Integration Details

The form is implemented in `components/CollaborationHero.tsx` and includes:

- State management for form data
- Real-time validation
- Error handling and display
- Loading states during submission
- Success/error toast notifications
- Form reset after successful submission

## Security Features

1. **Formspree Protection**: Built-in spam protection and rate limiting
2. **Input Validation**: Client-side validation with server-side backup
3. **Content Filtering**: Basic content analysis for suspicious input
4. **Rate Limiting**: Prevents form abuse

## Maintenance

- Monitor Formspree dashboard for spam submissions
- Review and update validation rules as needed
- Check email delivery rates periodically
- Update Formspree settings based on usage patterns

---

For additional support, refer to:
- [Formspree Documentation](https://formspree.io/docs/)
- [Web3 Mates Development Guidelines](../README.md)
- [Contact Forms Setup](../README.md#contact-forms-setup)

