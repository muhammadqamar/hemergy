import Link from "next/link";
const InBox = ({ setRegisterState = { setRegisterState } }) => {
  return (
    <div className="registration-box">
      <div className="inbox-img flex-box">
        <img src="/images/favorite.svg" alt="inbox" />
      </div>
      <h4 className="p-xl center-text">Check your inbox!</h4>
      <p className="p-sm center-text">
        Please follow the confirmation link sent to email address <strong> name@gmail.com </strong>
        to complete registration
      </p>
      <div className="flex-box d-column gap-sm">
        <button className="btn secondary blue">Resend email</button>
        <button
          onClick={() => {
            setRegisterState(false);
          }}
          className=" btn-border secondary"
        >
          Sign up with a different email
        </button>
      </div>
      <p className=" center-text p-sm mb-6">
        Already a member?&nbsp;
        <Link href="/login" className="text-textcolor text-weight-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default InBox;
