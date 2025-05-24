"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCard({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="">
        <CardItem
          translateZ="50"
          className=""
        >
          {children}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
