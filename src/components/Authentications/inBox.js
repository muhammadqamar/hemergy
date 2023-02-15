import Link from "next/link";
const InBox = ({ setRegisterState, registerState }) => {
  return (
    <div className="registration-box">
      <div className="inbox-img flex-box">
        <img src="/images/favorite.svg" alt="inbox" />
      </div>
      <h4 className="p-xl center-text">Check your inbox!</h4>
      <p className="p-sm center-text">
        Please follow the confirmation link sent to email address <strong> {registerState} </strong>
        to complete registration
      </p>
      <div className="flex-box d-column gap-sm">
        <button className="btn secondary blue">Resend email</button>
        <button
           onClick={()=>setRegisterState('')}
          className=" btn-border secondary"
        >
          Sign up with a different email
        </button>

      </div>
      <p className="mb-6 center-text p-sm">
        Already a member?&nbsp;
        <Link    href="/login" className="text-textcolor text-weight-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default InBox;
