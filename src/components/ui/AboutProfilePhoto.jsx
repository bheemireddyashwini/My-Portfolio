"use client";

import { Bio } from "../../data/constants";
import ProtectedImage from "./ProtectedImage";

export default function AboutProfilePhoto() {
  return (
    <div
      className="about-photo-frame protected-media"
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      <ProtectedImage src={Bio.profileImage} alt={Bio.name} className="about-photo" />
    </div>
  );
}
