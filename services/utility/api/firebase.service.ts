import { createUserWithEmailAndPassword, RecaptchaVerifier, sendEmailVerification, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export const signupByEmailWithFirebase = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(userCredential);
    
    // Send verification email after successful registration
    await sendEmailVerification(user);
    alert('Verification email sent! Check your inbox.');
  } catch (error: any) {
    console.error(error?.message);
  }
};

export const sendPhoneVerificationCode = async (phoneNumber: string) => {
  try {
    // Set up reCAPTCHA
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container', // ID of your reCAPTCHA container in the DOM
      {
        size: 'invisible', // Options: 'normal', 'compact', or 'invisible'
        callback: () => {
          console.log('reCAPTCHA solved');
        },
      }
    );

    // Send the verification code
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
    console.log('Code sent successfully!', confirmationResult);
    return confirmationResult; // Use this to verify the code later
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

export const verifyPhoneCode = async (confirmationResult: any, verificationCode: string) => {
  try {
    // Confirm the verification code entered by the user
    const userCredential = await confirmationResult.confirm(verificationCode);
    console.log('Phone number verified successfully!', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error verifying code:', error);
    throw error;
  }
};
