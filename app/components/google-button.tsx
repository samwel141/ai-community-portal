import React from 'react';

interface GoogleButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className="google-button flex items-center justify-center"
      onClick={onClick}
      disabled={disabled}
      type='button'
    >
      <img
        src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
        alt="Google Sign In"
        className="google-button-icon"
      />
    </button>
  );
};

export default GoogleButton;