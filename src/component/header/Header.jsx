import profilePhoto from "../../img/profile Picture.png";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mx-auto border-b-2 max-w-6xl">
            <h1 className="text-3xl">
                Knowledge Book
            </h1>
            <img src={profilePhoto} alt="" />
        </div>
    );
};

export default Header;