import {
  GraduationCap,
  MapPin,
  User,
  Users,
  Wallet,
} from 'lucide-react-native';

export const steps = [
  {
    title: "Now let's build your Profile",
    IconBackgroundColor: '#FF66661A',
    icon: <MapPin size={24} color="#E91E63" />,
    fields: [
      {
        id: 'state',
        label: 'State',
        type: 'dropdown',
        options: ['Gujarat', 'Maharashtra', 'Delhi'],
      },
      {
        id: 'city',
        label: 'City',
        type: 'dropdown',
        options: ['Ahmedabad', 'Surat', 'Vadodara'],
      },
      {
        id: 'community',
        label: 'Community',
        type: 'dropdown',
        options: ['Patel', 'Shah', 'Mehta'],
      },
    ],
  },
  {
    title: "Now let's build your Profile",
    IconBackgroundColor: '#9A88FF1A',
    icon: <User size={24} color="#9A88FF" />,
    fields: [
      {
        id: 'marital',
        label: 'Marital status',
        type: 'dropdown',
        options: ['Never Married', 'Divorced', 'Widowed'],
      },
      {
        id: 'height',
        label: 'Height',
        type: 'dropdown',
        options: ['5\'0"', '5\'5"', '6\'0"'],
      },
      {
        id: 'diet',
        label: 'Diet',
        type: 'dropdown',
        options: ['Vegetarian', 'Non-Veg', 'Vegan'],
      },
    ],
  },
  {
    title: 'Great! Now some more details',
    IconBackgroundColor: '#1EA0DC1A',
    icon: <GraduationCap size={24} color="#1EA0DC" />,
    fields: [
      {
        id: 'qualification',
        label: 'Your highest qualification',
        type: 'dropdown',
        options: ['Bachelors', 'Masters', 'PhD'],
      },
      {
        id: 'college',
        label: 'College',
        type: 'multi_input',
        inputs: [
          { id: 'clg1', placeholder: 'College you attended' },
          { id: 'clg2', placeholder: 'Another college name' },
        ],
      },
    ],
  },
  {
    title: 'You are almost done!',
    IconBackgroundColor: '#1EDCB61A',
    icon: <Wallet size={24} color="#1EDCB6" />,
    fields: [
      { id: 'mobile', label: 'Mobile No.', type: 'phone_group' },
      {
        id: 'income',
        label: 'Annual Income',
        type: 'dropdown',
        options: ['0-5 LPA', '5-10 LPA', '10+ LPA'],
      },
      {
        id: 'work',
        label: 'Work Details',
        type: 'multi_input',
        inputs: [
          { id: 'detail1', placeholder: 'You work with' },
          { id: 'detail2', placeholder: 'You work as' },
          { id: 'detail3', placeholder: 'Company Name' },
        ],
      },
    ],
  },
  {
    id: 'photo_upload',
    type: 'custom_photo',
  },
  {
    title: '',
    icon: <Users size={24} color="#E91E63" />,
    type: 'familydetails',
    fields: [
      {
        id: 'familydetails',
        label: 'Add family details',
        type: 'multi_input',
        inputs: [
          { id: 'detail1', placeholder: 'Mother’s details' },
          { id: 'detail2', placeholder: 'Father’s details' },
          { id: 'detail3', placeholder: 'No. of Sisters' },
          { id: 'detail4', placeholder: 'No. of Brothers' },
        ],
      },
    ],
  },
];
export const PremiumType = [
  {
    id: 1,
    type: 'S',
  },
  {
    id: 2,
    type: 'G',
  },
  {
    id: 3,
    type: 'G+',
  },
  {
    id: 4,
    type: 'D',
  },
  {
    id: 5,
    type: 'D+',
  },
  {
    id: 6,
    type: 'P+',
  },
];
export const PremiumCardData = [
  { id: '1', title: 'Silver', price: '₹999', features: ['Ad-free experience', 'HD Video Quality', 'Cancel anytime'] },
  { id: '2', title: 'Gold', price: '₹1999', features: ['4K Video Quality', 'Offline Viewing', '3 Devices Logged in', 'Priority Support'] },
  { id: '3', title: 'Diamond', price: '₹2999', features: ['All Access Pass', '5 Devices Logged in', 'Family Sharing', 'Exclusive Content'] },
];