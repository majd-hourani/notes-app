import { getInitials } from "../utils/helpers";

function ProfileInfo({ onLogout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-800 font-medium bg-slate-100">
        {getInitials("Majd Alhourani")}
      </div>

      <div>
        <p className="text-sm font-medium">Majd Alhourani</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
