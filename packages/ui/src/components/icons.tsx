import { ArchiveIcon } from "@radix-ui/react-icons";
import { Settings } from "lucide-react";
import {
  MdBarChart,
  MdCelebration,
  MdDesk,
  MdDevices,
  MdExpandMore,
  MdFastfood,
  MdFence,
  MdFlightTakeoff,
  MdHomeWork,
  MdInventory2,
  MdOutlineAccountBalanceWallet,
  MdOutlineCategory,
  MdOutlineDescription,
  MdOutlineDifference,
  MdOutlineIntegrationInstructions,
  MdOutlineInventory2,
  MdOutlineListAlt,
  MdOutlineNotificationsNone,
  MdOutlineTune,
  MdPayments,
  MdPeople,
  MdPerson,
  MdRefresh,
  MdSave,
  MdTrendingDown,
  MdTrendingUp,
} from "react-icons/md";

export const Icons = {
  LogoSmall: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
      <title>Midday</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.304 0c-2.41.103-4.681.739-6.7 1.792l6.7 11.606V0Zm0 18.603-6.7 11.605a15.927 15.927 0 0 0 6.7 1.792V18.603ZM16.697 32V18.595L23.4 30.206A15.928 15.928 0 0 1 16.697 32Zm0-18.594V0c2.41.103 4.684.74 6.704 1.794l-6.704 11.612Zm-14.205 11.2L14.1 17.904 7.398 29.51a16.1 16.1 0 0 1-4.906-4.905Zm27.02-17.208-11.607 6.701 6.701-11.607a16.101 16.101 0 0 1 4.905 4.906ZM2.49 7.396A16.1 16.1 0 0 1 7.398 2.49l6.704 11.61L2.49 7.396Zm-.697 1.206A15.927 15.927 0 0 0 0 15.306h13.406L1.793 8.602ZM1.794 23.4A15.927 15.927 0 0 1 0 16.699h13.401L1.794 23.4Zm16.805-8.095H32a15.927 15.927 0 0 0-1.792-6.702l-11.61 6.702ZM30.207 23.4l-11.604-6.7H32c-.104 2.41-.74 4.68-1.793 6.7Zm-12.3-5.494 6.699 11.604a16.1 16.1 0 0 0 4.904-4.905l-11.604-6.7Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Logo: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={112}
      height={28}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.434 0A12.94 12.94 0 0 0 6.99 1.456l5.444 9.43V0Zm0 15.116-5.443 9.428A12.942 12.942 0 0 0 12.434 26V15.116ZM13.566 26V15.108l5.447 9.435A12.94 12.94 0 0 1 13.566 26Zm0-15.107V0c1.959.084 3.806.6 5.447 1.458l-5.447 9.435ZM2.024 19.992l9.433-5.446-5.446 9.432a13.081 13.081 0 0 1-3.987-3.986ZM23.978 6.011l-9.43 5.444 5.445-9.43a13.082 13.082 0 0 1 3.985 3.986ZM2.023 6.009a13.081 13.081 0 0 1 3.988-3.986l5.446 9.433-9.434-5.447Zm-.566.98A12.94 12.94 0 0 0 0 12.436h10.892L1.457 6.99Zm0 12.024A12.94 12.94 0 0 1 0 13.568h10.888l-9.43 5.445Zm13.654-6.577h10.89a12.941 12.941 0 0 0-1.457-5.446l-9.433 5.446Zm9.432 6.575-9.428-5.443H26a12.94 12.94 0 0 1-1.457 5.443Zm-9.995-4.464 5.444 9.429a13.08 13.08 0 0 0 3.985-3.985l-9.429-5.444Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M37.28 19v-8.16h1.2v1.552a3.343 3.343 0 0 1 2.928-1.712c1.232 0 2.16.608 2.512 1.632.608-1.008 1.76-1.632 2.96-1.632 1.568 0 2.688.992 2.688 2.576V19h-1.28v-5.408c0-1.232-.576-1.792-1.616-1.792-1.488 0-2.608 1.136-2.608 2.784V19h-1.28v-5.408c0-1.232-.576-1.792-1.616-1.792-1.488 0-2.608 1.136-2.608 2.784V19h-1.28ZM52.574 8.984V7.48h1.472v1.504h-1.472ZM52.67 19v-8.16h1.28V19h-1.28Zm10.389 0v-1.456c-.496 1.008-1.552 1.616-2.88 1.616-2.224 0-3.665-1.68-3.665-4.208 0-2.56 1.472-4.256 3.712-4.256 1.28 0 2.24.544 2.752 1.504V7.48h1.28V19h-1.2Zm-2.64-.96c1.632 0 2.623-1.2 2.623-3.136 0-1.904-1.008-3.088-2.623-3.088-1.616 0-2.592 1.184-2.592 3.136 0 1.92.976 3.088 2.592 3.088Zm12.983.96v-1.456c-.496 1.008-1.552 1.616-2.88 1.616-2.224 0-3.664-1.68-3.664-4.208 0-2.56 1.472-4.256 3.712-4.256 1.28 0 2.24.544 2.752 1.504V7.48h1.28V19h-1.2Zm-2.64-.96c1.632 0 2.624-1.2 2.624-3.136 0-1.904-1.008-3.088-2.624-3.088S68.17 13 68.17 14.952c0 1.92.976 3.088 2.592 3.088Zm9.255 1.12c-1.696 0-2.752-.88-2.752-2.304s.992-2.176 2.88-2.496l2.48-.416v-.368c0-1.232-.544-1.808-1.792-1.808-1.232 0-2.016.528-2.096 1.44h-1.232c.112-1.568 1.408-2.528 3.376-2.528 2.016 0 2.992.96 2.992 2.88v3.92c0 .48.064.96.176 1.52h-1.232c-.064-.32-.096-.688-.112-1.248-.432.896-1.408 1.408-2.688 1.408Zm-1.504-2.352c0 .832.576 1.264 1.68 1.264 1.424 0 2.432-.72 2.432-1.76V15l-2.288.352c-1.2.192-1.824.608-1.824 1.456Zm8.812 5.472 1.664-3.872-3.36-7.568h1.408l2.64 6.16 2.432-6.16h1.312l-4.736 11.44h-1.36Z"
      />
    </svg>
  ),
  Overview: MdBarChart,
  Apps: MdOutlineIntegrationInstructions,
  Transactions: MdOutlineListAlt,
  Invoice: MdOutlineDescription,
  Files: MdOutlineInventory2,
  Google: () => (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <path
          d="M10 3.958c1.475 0 2.796.509 3.838 1.5l2.854-2.854C14.959.992 12.696 0 10 0a9.995 9.995 0 0 0-8.933 5.508l3.325 2.58c.787-2.371 3-4.13 5.608-4.13Z"
          fill="#585858"
        />
        <path
          d="M19.575 10.23c0-.655-.063-1.288-.158-1.897H10v3.759h5.392a4.648 4.648 0 0 1-1.992 2.991l3.22 2.5c1.88-1.741 2.955-4.316 2.955-7.354Z"
          fill="#878787"
        />
        <path
          d="M4.388 11.912A6.075 6.075 0 0 1 4.07 10c0-.667.112-1.308.317-1.913L1.063 5.508A9.964 9.964 0 0 0 0 10c0 1.617.383 3.142 1.067 4.492l3.32-2.58Z"
          fill="#D7D7D7"
        />
        <path
          d="M10 20c2.7 0 4.97-.887 6.62-2.42l-3.22-2.5c-.896.603-2.05.958-3.4.958-2.608 0-4.82-1.759-5.612-4.13l-3.325 2.58C2.712 17.758 6.091 20 10 20Z"
          fill="#B3B3B3"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  Settings: MdOutlineTune,
  Inbox: ArchiveIcon,
  Check: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="m14 5.167-8 8L2.333 9.5l.94-.94L6 11.28l7.06-7.053.94.94Z"
      />
    </svg>
  ),
  AlertCircle: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.333 10.5h1.334v1.333H7.334V10.5Zm0-5.333h1.334v4H7.334v-4ZM8 1.833c-3.686 0-6.667 3-6.667 6.667A6.667 6.667 0 1 0 8 1.833Zm0 12A5.333 5.333 0 1 1 8 3.167a5.333 5.333 0 0 1 0 10.666Z"
      />
    </svg>
  ),
  Transactions2: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.333 16.667H5V20h18.333v-3.333Zm0-6.667H5v3.333h18.333V10ZM5 26.667h11.667v-3.334H5v3.334Zm19 10 4.333-4.334 4.334 4.334L35 34.333 30.667 30 35 25.667l-2.333-2.334-4.334 4.334L24 23.333l-2.333 2.334L26 30l-4.333 4.333L24 36.667Z"
      />
    </svg>
  ),
  Bank: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={37}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M33.167 36.833 30.333 34h-28.5v-3.333H27L19.334 23v4.333H16v-7.666l-7.333-7.334H1.834V9l2.333-1.167L.333 4 2.5 1.833l32.834 32.834-2.167 2.166ZM6 15.667v11.666h3.334V15.667H6ZM17.667 4.5 26.333 9h-12.5l3.334 3.333H33.5V9L17.667.667l-8 4.166 2.5 2.5 5.5-2.833Zm11.666 20v-8.833H26v5.5l3.334 3.333Z"
      />
    </svg>
  ),
  Info: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.333 5h1.333V3.667H6.333M7 12.333A5.34 5.34 0 0 1 1.666 7 5.34 5.34 0 0 1 7 1.667 5.34 5.34 0 0 1 12.333 7 5.34 5.34 0 0 1 7 12.333Zm0-12a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 7 .333Zm-.667 10h1.333v-4H6.333v4Z"
      />
    </svg>
  ),
  Close: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
      />
    </svg>
  ),
  ChartGantt: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.942 5h8V2h2v20h-2v-4h-4v-3h4v-2h-6v-3h6V8h-8V5Zm12 0h3v3h-3V5Zm0 5h5v3h-5v-3Zm0 5h8v3h-8v-3Z"
      />
    </svg>
  ),
  CreationOutline: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="m9.873 4 2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5 2.5-5.5Zm0 4.83-1 2.17-2.17 1 2.17 1 1 2.17 1-2.17 2.17-1-2.17-1-1-2.17Zm10 .17-1.26-2.74L15.873 5l2.74-1.25L19.873 1l1.25 2.75L23.873 5l-2.75 1.26L19.873 9Zm0 14-1.26-2.74-2.74-1.26 2.74-1.25 1.26-2.75 1.25 2.75 2.75 1.25-2.75 1.26-1.25 2.74Z"
      />
    </svg>
  ),
  FileDocument: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={23}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.395 0H7.728a1.922 1.922 0 0 0-1.917 1.917V17.25c0 1.054.863 1.917 1.917 1.917h11.5a1.922 1.922 0 0 0 1.917-1.917V5.75L15.395 0Zm3.833 17.25h-11.5V1.917h6.708v4.791h4.792V17.25ZM3.895 3.833v17.25h15.333V23H3.895a1.922 1.922 0 0 1-1.917-1.917V3.833h1.917Zm5.75 5.75V11.5h7.666V9.583H9.645Zm0 3.834v1.916h4.791v-1.916H9.645Z"
      />
    </svg>
  ),
  OpenSource: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.942 1c6.076 0 11 4.925 11 11 0 4.84-3.125 8.95-7.468 10.42l-.248.082-3.194-8.305A2.218 2.218 0 0 0 15.141 12a2.2 2.2 0 1 0-2.29 2.198l-3.194 8.304-.248-.082C5.066 20.95 1.942 16.84 1.942 12c0-6.075 4.925-11 11-11Zm0 2.2a8.8 8.8 0 0 0-4.509 16.36l1.629-4.235a4.399 4.399 0 0 1 2.88-7.725 4.399 4.399 0 0 1 2.882 7.725c.622 1.622 1.165 3.033 1.627 4.235A8.8 8.8 0 0 0 12.942 3.2Z"
      />
    </svg>
  ),
  ReceiptText: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="m13.85 20.927-1.26 1.26-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5v-20l1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5v11.35c-.63-.22-1.3-.35-2-.35v-8h-14v14h8c0 .57.1 1.22.26 1.74Zm-7.26-5.74v2h7.35c.26-.75.65-1.42 1.19-2H6.59Zm0-2h12v-2h-12v2Zm0-4h12v-2h-12v2Zm17 8.23-1.16-1.41-3.59 3.59-1.59-1.59-1.16 1.18 2.75 3"
      />
    </svg>
  ),
  TimeCog: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.947 19.415c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1l1.1.8Zm-3.3-1.4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5Zm-6.5-4v-6h-2v6m4-13h-6v2h6v-2Zm-3.7 19c-3.5-.4-6.3-3.4-6.3-7 0-3.9 3.1-7 7-7 3.2 0 5.9 2.1 6.7 5 .8.1 1.5.3 2.2.6-.3-1.6-.9-3-1.9-4.2l1.5-1.4c-.5-.5-1-1-1.5-1.4l-1.4 1.4c-1.5-1.3-3.5-2-5.6-2-5 0-9 4-9 9s4 9 9 9h.3c-.5-.6-.8-1.3-1-2Z"
      />
    </svg>
  ),
  FlightTakeoff: MdFlightTakeoff,
  Desk: MdDesk,
  FastFood: MdFastfood,
  Save: MdSave,
  HomeWork: MdHomeWork,
  Payments: MdPayments,
  Devices: MdDevices,
  AccountBalance: MdOutlineAccountBalanceWallet,
  Fence: MdFence,
  Celebration: MdCelebration,
  Refresh: MdRefresh,
  Inventory2: MdInventory2,
  SettingsCog: Settings,
  Person: MdPerson,
  Peolple: MdPeople,
  Notifications: MdOutlineNotificationsNone,
  ChevronDown: MdExpandMore,
  TrendingUp: MdTrendingUp,
  TrendingDown: MdTrendingDown,
  Category: MdOutlineCategory,
  Difference: MdOutlineDifference,
};
