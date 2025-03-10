import ReviewDetailComponent from "@/components/reviews/review-detail";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ReviewDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <div>
      <ReviewDetailComponent id={id} />
    </div>
  );
};

export default ReviewDetailPage;
