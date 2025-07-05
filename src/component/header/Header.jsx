import profilePhoto from "../../img/profile Picture.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h1 class="text-3xl">
                Knowledge Book
            </h1>
            <img src={profilePhoto} alt="" />
        </div>
    );
};

export default Header;