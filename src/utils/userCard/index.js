
export default function UserCard({ bg,detail ,avatar, name, designation, bio }) {

    return (
        <div className="hemergy-user-card flex gap-[12px]">
            <div style={{ backgroundImage: `url('${avatar}')` }} alt="user" className={`${detail ?'w-[54px] h-[54px]':'w-[40px] h-[40px]'}  bg-no-repeat bg-cover bg-center shrink-0`} />
            <div>
                <h5 className={`font-semibold ${bg &&'text-white'} ${detail?'text-[20px] leading-[28px] pb-[4px]':'text-[14px] leading-[20px]'}`}>{name}</h5>
                <h6 className={`${bg ?'text-white500':'text-gray800'} font-medium text-[12px] leading-[14px]  pb-[8px] `}>{designation}</h6>
                {bio && <p className="font-normal text-[14px] leading-[20px]  text-gray800">
                    {bio}
                </p>
                }
            </div>
        </div>
    );
}
