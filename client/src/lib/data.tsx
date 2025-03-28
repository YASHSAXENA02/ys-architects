import React, { ReactNode } from "react";
import {
  Pencil,
  Building,
  Hammer,
  Leaf,
  Sofa,
  Box,
} from "lucide-react";

export const services = [
  {
    icon: <Pencil size={24} className="text-[#C9A227]" />,
    title: "Architectural Design",
    description:
      "Our core service encompasses conceptualization, planning, and detailed design development to transform your vision into buildable reality.",
    features: ["Concept Development", "Schematic Design", "Design Development"],
  },
  {
    icon: <Building size={24} className="text-[#C9A227]" />,
    title: "Urban Planning",
    description:
      "We create thoughtful urban solutions that balance aesthetics, functionality, sustainability, and community needs.",
    features: ["Master Planning", "Urban Design", "Community Development"],
  },
  {
    icon: <Hammer size={24} className="text-[#C9A227]" />,
    title: "Construction Documentation",
    description:
      "Comprehensive and detailed documentation ensuring your project is built according to specifications and industry standards.",
    features: ["Construction Drawings", "Technical Specifications", "Bidding Assistance"],
  },
  {
    icon: <Leaf size={24} className="text-[#C9A227]" />,
    title: "Sustainable Design",
    description:
      "Environmentally responsible approaches that minimize ecological impact while maximizing resource efficiency.",
    features: ["Green Building Certification", "Energy Efficiency Analysis", "Sustainable Material Selection"],
  },
  {
    icon: <Sofa size={24} className="text-[#C9A227]" />,
    title: "Interior Design",
    description:
      "Thoughtfully crafted interior spaces that enhance functionality, aesthetics, and the overall user experience.",
    features: ["Space Planning", "Material & Furniture Selection", "Lighting Design"],
  },
  {
    icon: <Box size={24} className="text-[#C9A227]" />,
    title: "3D Visualization",
    description:
      "Realistic renderings and virtual experiences that help you visualize your project before construction begins.",
    features: ["Photorealistic Renderings", "3D Models", "Virtual Walkthroughs"],
  },
];

export const processSteps = [
  {
    title: "Consultation & Brief",
    description:
      "We begin by understanding your needs, vision, constraints, and aspirations for the project. This foundational step shapes everything that follows.",
  },
  {
    title: "Concept Development",
    description:
      "Creating preliminary designs that explore different approaches to meet your requirements while considering site conditions and contextual factors.",
  },
  {
    title: "Design Development",
    description:
      "Refining the approved concept into detailed drawings with precise specifications for materials, finishes, and structural elements.",
  },
  {
    title: "Documentation",
    description:
      "Creating comprehensive construction documents that contractors will use to build your project accurately and efficiently.",
  },
  {
    title: "Bidding & Negotiation",
    description:
      "Assisting in the contractor selection process to ensure your project is built by qualified professionals at a fair price.",
  },
  {
    title: "Construction Oversight",
    description:
      "Monitoring the construction process to ensure adherence to design intent, quality standards, and timelines.",
  },
];

export const featuredProjects = [
  {
    title: "Coastal Residence",
    description:
      "Modern beach house designed to maximize ocean views while providing comfortable living spaces.",
    category: "Residential",
    location: "California",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Urban Office Tower",
    description:
      "Energy-efficient commercial building with flexible workspaces and collaborative environments.",
    category: "Commercial",
    location: "Chicago",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    title: "Contemporary Art Museum",
    description:
      "Iconic cultural space designed to highlight modern art within a striking architectural context.",
    category: "Cultural",
    location: "New York",
    imageUrl:
      "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Hillside Villas",
    description:
      "Luxury residential complex integrated into the natural topography with sustainable features.",
    category: "Residential",
    location: "Italy",
    imageUrl:
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Sustainable Campus",
    description:
      "Educational facility designed with zero-carbon principles and biophilic elements throughout.",
    category: "Educational",
    location: "Singapore",
    imageUrl:
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Urban Renewal Project",
    description:
      "Mixed-use development revitalizing a former industrial area into a vibrant community hub.",
    category: "Urban Planning",
    location: "Toronto",
    imageUrl:
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    title: "Skyline Apartments",
    description:
      "High-rise residential complex with panoramic city views and sustainable design features.",
    category: "Residential",
    location: "Seattle",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Tech Innovation Center",
    description:
      "Cutting-edge facility designed to foster collaboration and technological advancement.",
    category: "Commercial",
    location: "San Francisco",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Performing Arts Center",
    description:
      "Acoustically optimized venue providing exceptional experiences for performers and audiences.",
    category: "Cultural",
    location: "Vienna",
    imageUrl:
      "https://unsplash.com/photos/white-and-black-building-under-blue-sky-during-daytime-eJyVpdXE248",
  },
  {
    title: "Downtown Revitalization",
    description:
      "Comprehensive urban planning project transforming a historic district into a modern pedestrian-friendly area.",
    category: "Urban Planning",
    location: "Boston",
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
  },
  {
    title: "STEM Education Building",
    description:
      "Interactive learning spaces designed to inspire the next generation of scientists and engineers.",
    category: "Educational",
    location: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1562516710-55d39b75b6d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Waterfront Hotel",
    description:
      "Luxury hospitality experience with seamless indoor-outdoor integration and stunning water views.",
    category: "Commercial",
    location: "Miami",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "YS Architects transformed our vision into reality with exceptional attention to detail. Their ability to balance aesthetics with functionality resulted in a space that truly enhances our daily life.",
    author: "Sarah Johnson",
    role: "Residential Client",
    avatarUrl:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    quote:
      "Working with YS Architects on our office redesign was a seamless experience. They understood our company culture and created a space that fosters collaboration and innovation.",
    author: "Michael Chen",
    role: "TechForward CEO",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    quote:
      "The team at YS Architects brought innovative solutions to our complex project requirements. Their sustainable design approach aligned perfectly with our values and exceeded our expectations.",
    author: "Olivia Martinez",
    role: "Development Director",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

export const teamMembers = [
  {
    name: "Yash Saxena",
    role: "Founding Partner",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Pankaj Kush",
    role: "Senior Partner",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Mohit Srivastav",
    role: "Design Head",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];