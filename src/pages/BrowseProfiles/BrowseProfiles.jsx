
// BrowseProfiles.jsx
// Ultra-premium matrimonial profile browser – supports both genders
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMosque } from "react-icons/fa";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer"

import {
  Heart,
  MapPin,
  Users,
  ShieldCheck,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  X,
  Star,
  Ruler,
  GraduationCap,
  Briefcase,
  Baby,
  Cigarette,
  DollarSign,
  Globe,
  Home,
  Calendar,
  Scale,
  UserCheck,
  BookOpen,
  Clock,
  Languages,
  Building,
  HandHeart,
  Smile,
  Ban,
} from 'lucide-react';

// 6 Women profiles (shown when men browse)
const womenProfiles = [
  {
    id: 1,
    name: 'Amina Juma',
    age: 26,
    heightCm: 165,
    location: 'Dar es Salaam, Tanzania',
    country: 'Tanzania',
    region: 'Dar es Salaam',
    tribe: 'Swahili',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Bachelor',
    occupation: 'Pharmacist',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    beard: null,
    verified: true,
    profileCompleteness: 92,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
    about: 'Practicing Muslimah seeking a righteous, responsible and family-oriented husband in sha Allah...',
  },
  {
    id: 2,
    name: 'Fatuma Hassan',
    age: 28,
    heightCm: 160,
    location: 'Zanzibar, Tanzania',
    country: 'Tanzania',
    region: 'Zanzibar',
    tribe: 'Zanzibari',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Bachelor',
    occupation: 'Secondary School Teacher',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 88,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
    about: 'Committed to deen, modest, calm and respectful...',
  },
  {
    id: 3,
    name: 'Zainab Mwamba',
    age: 24,
    heightCm: 168,
    location: 'Arusha, Tanzania',
    country: 'Tanzania',
    region: 'Arusha',
    tribe: 'Chaga',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: 'Mostly 5',
    hijab: 'Yes – full hijab',
    education: 'Diploma',
    occupation: 'Registered Nurse',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 85,
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80',
    about: 'Compassionate, hardworking and family-oriented...',
  },
  {
    id: 4,
    name: 'Maryam Khamis',
    age: 29,
    heightCm: 162,
    location: 'Dodoma, Tanzania',
    country: 'Tanzania',
    region: 'Dodoma',
    tribe: 'Gogo',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Bachelor',
    occupation: 'Financial Accountant',
    employmentStatus: 'Full-time',
    incomeLevel: 'Upper-middle',
    maritalStatus: 'Divorced (no children)',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 90,
    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&auto=format&fit=crop&q=80',
    about: 'Divorced but still hopeful by Allah’s will...',
  },
  {
    id: 5,
    name: 'Halima Abdallah',
    age: 27,
    heightCm: 170,
    location: 'Mwanza, Tanzania',
    country: 'Tanzania',
    region: 'Mwanza',
    tribe: 'Sukuma',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Bachelor',
    occupation: 'Software Developer',
    employmentStatus: 'Full-time',
    incomeLevel: 'Upper-middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Open to discuss',
    verified: true,
    profileCompleteness: 95,
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=80',
    about: 'Tech-savvy, practicing Muslimah who balances career and deen...',
  },
  {
    id: 6,
    name: 'Salma Omar',
    age: 31,
    heightCm: 158,
    location: 'Mombasa, Kenya',
    country: 'Kenya',
    region: 'Coast',
    tribe: 'Mijikenda',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Master',
    occupation: 'University Lecturer',
    employmentStatus: 'Full-time',
    incomeLevel: 'High',
    maritalStatus: 'Divorced (1 child)',
    hasChildren: true,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 94,
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
    about: 'Educated, patient and loving mother...',
  },

  {
    id: 7,
    name: 'Grace Njeri',
    age: 23,
    heightCm: 165,
    weightKg: 58,
    location: 'Dar es Salaam, Tanzania',
    country: 'Tanzania',
    region: 'Dar es Salaam',
    tribe: 'English',
    religion: 'Christian',
    sect: 'Catholic',
    prayerFrequency: 'Daily',
    hijab: 'No',
    education: 'Bachelor',
    occupation: 'Pharmacist',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Not Applicable',
    beard: null,
    verified: true,
    profileCompleteness: 92,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
    about: 'Faithful, caring, and seeking a responsible, family-oriented partner...',
  },
  {
    id: 8,
    name: 'Elizabeth Mwangi',
    age: 28,
    heightCm: 160,
    weightKg: 55,
    location: 'Zanzibar, Tanzania',
    country: 'Tanzania',
    region: 'Zanzibar',
    tribe: 'Zanzibari',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Bachelor',
    occupation: 'Secondary School Teacher',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 88,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
    about: 'Committed to faith, modest, calm, and respectful...',
  },
  {
    id: 9,
    name: 'Hannah Mussa',
    age: 24,
    heightCm: 168,
    weightKg: 60,
    location: 'Arusha, Tanzania',
    country: 'Tanzania',
    region: 'Arusha',
    tribe: 'Chaga',
    religion: 'Christian',
    sect: 'Protestant',
    prayerFrequency: 'Mostly daily',
    hijab: 'No',
    education: 'Diploma',
    occupation: 'Registered Nurse',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Not Applicable',
    verified: true,
    profileCompleteness: 85,
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80',
    about: 'Compassionate, hardworking, and family-oriented...',
  },
  {
    id: 10,
    name: 'Faith Khamis',
    age: 29,
    heightCm: 162,
    weightKg: 57,
    location: 'Dodoma, Tanzania',
    country: 'Tanzania',
    region: 'Dodoma',
    tribe: 'Gogo',
    religion: 'Christian',
    sect: 'Anglican',
    prayerFrequency: 'Daily',
    hijab: 'No',
    education: 'Bachelor',
    occupation: 'Financial Accountant',
    employmentStatus: 'Full-time',
    incomeLevel: 'Upper-middle',
    maritalStatus: 'Divorced (no children)',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Not Applicable',
    verified: true,
    profileCompleteness: 90,
    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&auto=format&fit=crop&q=80',
    about: 'Divorced but still hopeful and guided by faith...',
  },
  {
    id: 11,
    name: 'Joyce Abdallah',
    age: 27,
    heightCm: 170,
    weightKg: 62,
    location: 'Mwanza, Tanzania',
    country: 'Tanzania',
    region: 'Mwanza',
    tribe: 'Sukuma',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    hijab: 'Yes – full hijab',
    education: 'Bachelor',
    occupation: 'Software Developer',
    employmentStatus: 'Full-time',
    incomeLevel: 'Upper-middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Open to discuss',
    verified: true,
    profileCompleteness: 95,
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=80',
    about: 'Tech-savvy, faith-oriented, and career-focused...',
  },
  {
    id: 12,
    name: 'Rebecca Omar',
    age: 31,
    heightCm: 158,
    weightKg: 54,
    location: 'Mombasa, Kenya',
    country: 'Kenya',
    region: 'Coast',
    tribe: 'Mijikenda',
    religion: 'Christian',
    sect: 'Catholic',
    prayerFrequency: 'Daily',
    hijab: 'No',
    education: 'Master',
    occupation: 'University Lecturer',
    employmentStatus: 'Full-time',
    incomeLevel: 'High',
    maritalStatus: 'Divorced (1 child)',
    hasChildren: true,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Not Applicable',
    verified: true,
    profileCompleteness: 94,
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
    about: 'Educated, patient, and loving mother...',
  },

];

// 6 Men profiles (shown when women browse)
const menProfiles = [
  {
    id: 101,
    name: 'Ahmed Khalid',
    age: 29,
    heightCm: 178,
    location: 'Dar es Salaam, Tanzania',
    country: 'Tanzania',
    region: 'Dar es Salaam',
    tribe: 'Zaramo',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    beard: 'Full beard',
    education: 'Bachelor of Engineering',
    occupation: 'Civil Engineer',
    employmentStatus: 'Full-time',
    incomeLevel: 'Upper-middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 94,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    about: 'Committed Muslim, responsible engineer seeking a pious, modest wife...',
  },
  {
    id: 102,
    name: 'Yusuf Mwinyi',
    age: 32,
    heightCm: 175,
    location: 'Zanzibar, Tanzania',
    country: 'Tanzania',
    region: 'Zanzibar',
    tribe: 'Zanzibari',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    beard: 'Trimmed',
    education: 'Master',
    occupation: 'Business Owner',
    employmentStatus: 'Self-employed',
    incomeLevel: 'High',
    maritalStatus: 'Divorced (no children)',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 90,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    about: 'Family-oriented entrepreneur with strong deen...',
  },
  {
    id: 103,
    name: 'Ibrahim Hassan',
    age: 30,
    heightCm: 180,
    location: 'Arusha, Tanzania',
    country: 'Tanzania',
    region: 'Arusha',
    tribe: 'Maasai',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    beard: 'Full beard',
    education: 'Bachelor',
    occupation: 'IT Specialist',
    employmentStatus: 'Full-time',
    incomeLevel: 'Upper-middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 91,
    photo: 'https://images.unsplash.com/photo-1552058544-f2b84fbe8308?w=800&auto=format&fit=crop&q=80',
    about: 'Devout, hardworking and family-focused...',
  },
  {
    id: 104,
    name: 'Omar Farouk',
    age: 34,
    heightCm: 182,
    location: 'Dodoma, Tanzania',
    country: 'Tanzania',
    region: 'Dodoma',
    tribe: 'Gogo',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    beard: 'Full beard',
    education: 'Master',
    occupation: 'Doctor',
    employmentStatus: 'Full-time',
    incomeLevel: 'High',
    maritalStatus: 'Divorced (no children)',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 93,
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=80',
    about: 'Compassionate doctor with strong faith...',
  },
  {
    id: 105,
    name: 'Khalid Musa',
    age: 28,
    heightCm: 174,
    location: 'Mwanza, Tanzania',
    country: 'Tanzania',
    region: 'Mwanza',
    tribe: 'Sukuma',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    beard: 'Trimmed',
    education: 'Bachelor',
    occupation: 'Banker',
    employmentStatus: 'Full-time',
    incomeLevel: 'Middle',
    maritalStatus: 'Never Married',
    hasChildren: false,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 89,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
    about: 'Responsible and calm professional...',
  },
  {
    id: 106,
    name: 'Bilal Said',
    age: 35,
    heightCm: 185,
    location: 'Nairobi, Kenya',
    country: 'Kenya',
    region: 'Nairobi',
    tribe: 'Kikuyu',
    religion: 'Muslim',
    sect: 'Sunni',
    prayerFrequency: '5 times daily',
    beard: 'Full beard',
    education: 'PhD',
    occupation: 'University Professor',
    employmentStatus: 'Full-time',
    incomeLevel: 'High',
    maritalStatus: 'Widowed (2 children)',
    hasChildren: true,
    wantsChildren: true,
    smoking: false,
    polygamy: 'Acceptable',
    verified: true,
    profileCompleteness: 96,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80',
    about: 'Educated widower with strong iman...',
  },
];

// FILTER_CATEGORIES (unchanged)
const FILTER_CATEGORIES = {
  basic: {
    title: 'Basic Preferences',
    icon: <Heart size={18} />,
    fields: [
      { key: 'ageMin', label: 'Age (min)', type: 'number', min: 18, max: 60 },
      { key: 'ageMax', label: 'Age (max)', type: 'number', min: 18, max: 60 },
      { key: 'heightMin', label: 'Height (cm min)', type: 'number', min: 140, max: 200 },
      { key: 'heightMax', label: 'Height (cm max)', type: 'number', min: 140, max: 200 },
      {
        key: 'maritalStatus',
        label: 'Marital Status',
        type: 'select',
        options: ['', 'Never Married', 'Divorced', 'Widowed', 'Separated', 'Divorced with children'],
      },
      { key: 'hasChildren', label: 'Has Children', type: 'select', options: ['', 'Yes', 'No'] },
      { key: 'wantsChildren', label: 'Wants Children', type: 'select', options: ['', 'Yes', 'No', 'Open to discuss'] },
    ],
  },
  religion: {
    title: 'Religion & Practice',
    icon: <FaMosque size={18} className="text-[#d4c78a]" />,
    fields: [
      { key: 'religion', label: 'Religion', type: 'select', options: ['', 'Muslim', 'Christian', 'Hindu', 'Other'] },
      { key: 'sect', label: 'Sect', type: 'select', options: ['', 'Sunni', 'Shia', 'Ahmadiyya', 'No preference'] },
      {
        key: 'prayerFrequency',
        label: 'Prayer Frequency',
        type: 'select',
        options: ['', '5 times daily', 'Mostly 5', 'Jummah + some', 'Occasionally', 'Not regularly'],
      },
      {
        key: 'hijab',
        label: 'Hijab / Modesty',
        type: 'select',
        options: ['', 'Full hijab + niqab', 'Full hijab', 'Hijab sometimes', 'No hijab', 'No preference'],
      },
      {
        key: 'beard',
        label: 'Beard (for men)',
        type: 'select',
        options: ['', 'Full beard', 'Trimmed', 'No beard', 'No preference'],
      },
    ],
  },
  educationAndCareer: {
    title: 'Education & Career',
    icon: <GraduationCap size={18} />,
    fields: [
      {
        key: 'education',
        label: 'Education Level',
        type: 'select',
        options: ['', 'No formal', 'Primary', 'Secondary/O-Level', 'A-Level', 'Diploma', 'Bachelor', 'Master', 'PhD'],
      },
      { key: 'occupation', label: 'Occupation', type: 'text' },
      {
        key: 'employmentStatus',
        label: 'Employment',
        type: 'select',
        options: ['', 'Full-time', 'Part-time', 'Self-employed', 'Student', 'Housewife', 'Unemployed', 'Retired'],
      },
      {
        key: 'incomeLevel',
        label: 'Income Level',
        type: 'select',
        options: ['', 'Low', 'Middle', 'Upper-middle', 'High', 'Very high', 'Prefer not to say'],
      },
    ],
  },
  locationAndBackground: {
    title: 'Location & Background',
    icon: <Globe size={18} />,
    fields: [
      { key: 'country', label: 'Country', type: 'text' },
      { key: 'region', label: 'Region / Province', type: 'text' },
      { key: 'city', label: 'City', type: 'text' },
      { key: 'tribe', label: 'Tribe / Ethnicity', type: 'text' },
      { key: 'motherTongue', label: 'Mother Tongue', type: 'text' },
      { key: 'languages', label: 'Languages Spoken', type: 'text' },
    ],
  },
  lifestyleAndValues: {
    title: 'Lifestyle & Values',
    icon: <Smile size={18} />,
    fields: [
      { key: 'smoking', label: 'Smoking', type: 'select', options: ['', 'No', 'Occasionally', 'Yes'] },
      {
        key: 'polygamy',
        label: 'Polygamy Acceptance',
        type: 'select',
        options: ['', 'Acceptable', 'Not acceptable', 'Open to discuss'],
      },
      {
        key: 'livingArrangement',
        label: 'Living Arrangement',
        type: 'select',
        options: ['', 'With parents', 'Alone', 'Shared', 'No preference'],
      },
      {
        key: 'personality',
        label: 'Personality Type',
        type: 'select',
        options: ['', 'Calm', 'Outgoing', 'Reserved', 'Romantic', 'Practical', 'Spiritual'],
      },
    ],
  },
  other: {
    title: 'Other Preferences',
    icon: <Star size={18} />,
    fields: [
      { key: 'verifiedOnly', label: 'Verified profiles only', type: 'checkbox' },
      { key: 'hasPhoto', label: 'With photo only', type: 'checkbox' },
      {
        key: 'profileCompletenessMin',
        label: 'Profile completeness ≥ %',
        type: 'number',
        min: 0,
        max: 100,
      },
    ],
  },
};

const BrowseProfiles = () => {
  // Toggle: 'women' = show women profiles (for men), 'men' = show men profiles (for women)
  const [browsingFor, setBrowsingFor] = useState('women');

  const currentProfiles = browsingFor === 'women' ? womenProfiles : menProfiles;

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState(() => {
    return Object.fromEntries(
      Object.values(FILTER_CATEGORIES)
        .flatMap(cat => cat.fields || [])
        .map(f => [f.key, f.type === 'checkbox' ? false : ''])
    );
  });

  const [showFilters, setShowFilters] = useState(false);

  const [openSections, setOpenSections] = useState({
    basic: true,
    religion: true,
    educationAndCareer: false,
    locationAndBackground: false,
    lifestyleAndValues: false,
    other: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // FIXED & WORKING filter logic
  const filteredProfiles = useMemo(() => {
    let result = [...currentProfiles];

    // 1. Search term filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(p =>
        (p.name?.toLowerCase() || '').includes(term) ||
        (p.location?.toLowerCase() || '').includes(term) ||
        (p.about?.toLowerCase() || '').includes(term) ||
        (p.occupation?.toLowerCase() || '').includes(term)
      );
    }

    // 2. Numeric range filters
    if (filters.ageMin !== '' && !isNaN(filters.ageMin)) {
      result = result.filter(p => p.age >= Number(filters.ageMin));
    }
    if (filters.ageMax !== '' && !isNaN(filters.ageMax)) {
      result = result.filter(p => p.age <= Number(filters.ageMax));
    }
    if (filters.heightMin !== '' && !isNaN(filters.heightMin)) {
      result = result.filter(p => p.heightCm >= Number(filters.heightMin));
    }
    if (filters.heightMax !== '' && !isNaN(filters.heightMax)) {
      result = result.filter(p => p.heightCm <= Number(filters.heightMax));
    }
    if (filters.profileCompletenessMin !== '' && !isNaN(filters.profileCompletenessMin)) {
      result = result.filter(p => (p.profileCompleteness || 0) >= Number(filters.profileCompletenessMin));
    }

    // 3. Select / exact match filters
    const selectKeys = [
      'maritalStatus', 'hasChildren', 'wantsChildren', 'religion', 'sect',
      'prayerFrequency', 'hijab', 'beard', 'education', 'employmentStatus',
      'incomeLevel', 'country', 'region', 'city', 'tribe', 'motherTongue',
      'languages', 'smoking', 'polygamy', 'livingArrangement', 'personality'
    ];

    selectKeys.forEach(key => {
      if (filters[key] && filters[key] !== '') {
        result = result.filter(p => p[key] === filters[key]);
      }
    });

    // 4. Checkbox filters
    if (filters.verifiedOnly === true) {
      result = result.filter(p => p.verified === true);
    }
    if (filters.hasPhoto === true) {
      result = result.filter(p => !!p.photo);
    }

    return result;
  }, [searchTerm, filters, browsingFor]);

  const activeFilters = Object.entries(filters)
    .filter(([_, v]) => v !== '' && v !== false)
    .map(([k, v]) => ({ key: k, label: k.replace(/([A-Z])/g, ' $1').trim(), value: v }));

  const removeFilter = (key) => {
    setFilters(prev => {
      const next = { ...prev };
      if (key.includes('Only')) next[key] = false;
      else next[key] = '';
      return next;
    });
  };

  const resetAllFilters = () => {
    setFilters(
      Object.fromEntries(
        Object.values(FILTER_CATEGORIES)
          .flatMap(cat => cat.fields || [])
          .map(f => [f.key, f.type === 'checkbox' ? false : ''])
      )
    );
  };

  return (
    <>
   
    <section className="min-h-screen pt-28 bg-gradient-to-b from-[#0a120b] via-[#0f1710] to-[#1a2a1c] pb-20 pt-6 px-4 sm:px-6 lg:px-8 text-[#f5f5f0]">
      
      <div className="max-w-7xl mx-auto">

 {/* Header */}
      <Header />
        
        {/* Gender Toggle + Title */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex rounded-full bg-[#1a2a1c]/80 border border-[#d4c78a]/30 p-1 mb-6">
            <button
              onClick={() => setBrowsingFor('women')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                browsingFor === 'women'
                  ? 'bg-[#d4c78a] text-[#0f1710] shadow-md'
                  : 'text-[#f5f5f0]/80 hover:bg-[#1a2a1c]/90'
              }`}
            >
              Browse Sisters
            </button>
            <button
              onClick={() => setBrowsingFor('men')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                browsingFor === 'men'
                  ? 'bg-[#d4c78a] text-[#0f1710] shadow-md'
                  : 'text-[#f5f5f0]/80 hover:bg-[#1a2a1c]/90'
              }`}
            >
              Browse Brothers
            </button>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold bg-gradient-to-r from-white via-[#d4c78a] to-white bg-clip-text text-transparent mb-4">
            {browsingFor === 'women' ? 'Meet Practicing Sisters' : 'Meet Practicing Brothers'}
          </h1>

          <p className="text-lg md:text-xl text-[#f5f5f0]/80 max-w-3xl mx-auto">
            Serious, vetted, marriage-ready profiles from East Africa and beyond
          </p>
        </div>

        {/* Filter & Search Panel */}
        <div className="mb-10">
          <div className="bg-[#0f1710]/92 backdrop-blur-2xl border border-[#d4c78a]/30 rounded-2xl shadow-2xl shadow-black/50 p-5 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d4c78a]/60" size={20} />
                <input
                  type="text"
                  placeholder="Search name, city, keyword..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-[#0a120b]/70 border border-[#d4c78a]/35 text-white placeholder:text-[#f5f5f0]/50 focus:outline-none focus:border-[#d4c78a]/70 transition-all"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium border transition-all whitespace-nowrap ${
                  showFilters
                    ? 'bg-[#d4c78a]/20 border-[#d4c78a]/60 text-[#d4c78a]'
                    : 'bg-[#1a2a1c]/70 border-[#d4c78a]/35 text-[#f5f5f0]/85 hover:bg-[#1a2a1c]/90'
                }`}
              >
                <Filter size={18} />
                Advanced Filters ({activeFilters.length})
              </button>
            </div>

            {/* Active filter tags */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {activeFilters.map(f => (
                  <div
                    key={f.key}
                    className="bg-[#d4c78a]/15 text-[#d4c78a] text-sm px-3 py-1.5 rounded-full flex items-center gap-2"
                  >
                    {f.label}: <strong>{f.value}</strong>
                    <button onClick={() => removeFilter(f.key)}>
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={resetAllFilters}
                  className="text-red-400 hover:text-red-300 text-sm underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Filter sections */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {Object.entries(FILTER_CATEGORIES).map(([key, section]) => (
                      <div key={key} className="space-y-4">
                        <button
                          onClick={() => toggleSection(key)}
                          className="w-full flex items-center justify-between text-[#d4c78a] font-medium py-2 border-b border-[#d4c78a]/20"
                        >
                          <div className="flex items-center gap-2">
                            {section.icon}
                            {section.title}
                          </div>
                          {openSections[key] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {openSections[key] && (
                          <div className="space-y-5 pl-2">
                            {section.fields.map(field => (
                              <div key={field.key}>
                                <label className="block text-sm text-[#f5f5f0]/80 mb-2">
                                  {field.label}
                                </label>

                                {field.type === 'number' ? (
                                  <input
                                    type="number"
                                    min={field.min}
                                    max={field.max}
                                    value={filters[field.key] ?? ''}
                                    onChange={e => setFilters(prev => ({ ...prev, [field.key]: Number(e.target.value) || '' }))}
                                    className="w-full px-4 py-2.5 bg-[#0a120b]/70 border border-[#d4c78a]/30 rounded-lg text-white focus:border-[#d4c78a]/70 focus:outline-none"
                                  />
                                ) : field.type === 'select' ? (
                                  <select
                                    value={filters[field.key] ?? ''}
                                    onChange={e => setFilters(prev => ({ ...prev, [field.key]: e.target.value }))}
                                    className="w-full px-4 py-3 bg-[#0a120b]/70 border border-[#d4c78a]/30 rounded-xl text-white focus:border-[#d4c78a]/70"
                                  >
                                    <option value="">Any</option>
                                    {field.options.map(opt => (
                                      <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                  </select>
                                ) : field.type === 'checkbox' ? (
                                  <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={filters[field.key] ?? false}
                                      onChange={e => setFilters(prev => ({ ...prev, [field.key]: e.target.checked }))}
                                      className="w-5 h-5 accent-[#d4c78a]"
                                    />
                                    <span>{field.label}</span>
                                  </label>
                                ) : (
                                  <input
                                    type="text"
                                    value={filters[field.key] ?? ''}
                                    onChange={e => setFilters(prev => ({ ...prev, [field.key]: e.target.value }))}
                                    placeholder={`Any ${field.label.toLowerCase()}`}
                                    className="w-full px-4 py-3 bg-[#0a120b]/70 border border-[#d4c78a]/30 rounded-xl text-white placeholder:text-[#f5f5f0]/50 focus:border-[#d4c78a]/70"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={resetAllFilters}
                      className="px-8 py-3 bg-red-900/40 hover:bg-red-900/60 border border-red-500/40 text-red-200 rounded-xl transition-all font-medium"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Result count */}
        <div className="text-center md:text-left mb-8 text-[#d4c78a]/80 font-medium">
          Found {filteredProfiles.length} marriage-ready profiles
        </div>

        {/* Profiles grid */}
        {filteredProfiles.length === 0 ? (
          <div className="text-center py-24 text-[#f5f5f0]/60">
            No profiles match your current filters.<br/>
            Try removing some filters or broadening your criteria.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProfiles.map(profile => (
              <motion.article
                key={profile.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  group relative bg-[#0f1710]/70 backdrop-blur-xl
                  border border-[#d4c78a]/15 rounded-2xl overflow-hidden
                  shadow-xl hover:shadow-2xl hover:border-[#d4c78a]/40
                  transition-all duration-400
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {profile.verified && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#d4c78a]/90 text-[#0f1710] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      <ShieldCheck size={14} />
                      Verified
                    </div>
                  )}
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#d4c78a] transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-[#d4c78a] font-medium text-lg">{profile.age}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[#f5f5f0]/70">
                      <MapPin size={16} />
                      {profile.location.split(',')[0]}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-5 text-xs md:text-sm">
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <div className="text-[#d4c78a]/80 text-[10px] uppercase tracking-wider mb-0.5">Religion</div>
                      {profile.religion}
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <div className="text-[#d4c78a]/80 text-[10px] uppercase tracking-wider mb-0.5">Height</div>
                      {profile.heightCm} cm
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 text-center">
                      <div className="text-[#d4c78a]/80 text-[10px] uppercase tracking-wider mb-0.5">Status</div>
                      {profile.maritalStatus}
                    </div>
                  </div>

                  <p className="text-[#f5f5f0]/80 text-sm leading-relaxed line-clamp-3 mb-5">
                    {profile.about}
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-[#d4c78a]/10 hover:bg-[#d4c78a]/20 border border-[#d4c78a]/30 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm">
                      <Heart size={18} />
                      Interest
                    </button>
                    {/* <button className="flex-1 py-3 bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] text-[#0f1710] font-semibold rounded-xl shadow-lg hover:shadow-[#d4c78a]/40 transition-all flex items-center justify-center gap-2 text-sm">
                      View Profile
                    </button> */}

                    <button 
  onClick={() => window.location.href = `/profile/${profile.id}`}
  className="flex-1 py-3 bg-gradient-to-r from-[#d4c78a] to-[#e0d4a0] text-[#0f1710] font-semibold rounded-xl shadow-lg hover:shadow-[#d4c78a]/40 transition-all flex items-center justify-center gap-2 text-sm"
>
  View Full Profile
</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Bottom trust note */}
        <div className="text-center mt-16 md:mt-24 text-sm text-[#d4c78a]/60">
          All profiles manually reviewed • Serious marriage intentions only • NDOA Africa
        </div>
      </div>
    </section>

      {/* Footer */}
     <Footer />
    </>
  );
};

export default BrowseProfiles;