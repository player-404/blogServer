// fontaswome icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash, faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faPlus,
  faTrash,
  faFileImport,
  faFileExport
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEye,
  faEyeSlash,
  faMagnifyingGlass,
  faBell,
  faPlus,
  faTrash,
  faFileImport,
  faFileExport
);

export default FontAwesomeIcon;
