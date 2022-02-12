import React, { createRef } from "react";

const Reviews = ({
  id,
  reviewRef,
}: {
  id: string;
  reviewRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={reviewRef}>
      <h1 className="page-title">Reviews</h1>
    </section>
  );
};

export default Reviews;
