import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "./ProductReviewCard";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import HomeProductCard from "../../Home/HomeProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../../Redux/Customers/Product/Action";
import { addItemToCart } from "../../../../Redux/Customers/Cart/Action";
import { getAllReviews } from "../../../../Redux/Customers/Review/Action";
import { lengha_page1 } from "../../../../Data/Women/LenghaCholi";
import { gounsPage1 } from "../../../../Data/Gouns/gouns";

const product = {
  name: "Grand Wedding Package",
  title: "Exclusive Wedding Event Package",
  price: 500000,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Weddings", href: "#" },
    { id: 2, name: "Event Packages", href: "#" },
  ],
  images: [
    {
      src: "https://m.media-amazon.com/images/I/71S5hiNCl2L.AC_UL480_FMwebp_QL65.jpg",

      alt: "Decorated wedding hall",
    },
    {
      src: "https://imgs.search.brave.com/oejzFeiHGYkEEYyusoF7KNz5BIp7TQOtfUt8i12uB0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZ3JhbmR0cnVu/a3VzLmNvbS9jZG4v/c2hvcC9maWxlcy9N/TS1QUi1MSC0yODg5/OC1CTC1EUC1IVl9D/LUVOUV8xXzI0NTVf/NDAweDYwMF9jcm9w/X2NlbnRlci5qcGc_/dj0xNzM1OTEwNjU1",
      alt: "Wedding stage decoration",
    },
  ],
  colors: [
    { name: "Gold", class: "bg-yellow-500", selectedClass: "ring-yellow-400" },
    { name: "Silver", class: "bg-gray-400", selectedClass: "ring-gray-600" },
  ],
  sizes: [
    { name: "Full Event", inStock: true },
    { name: "Reception Only", inStock: true },
    { name: "Ceremony Only", inStock: true },
  ],
  description:
    "Make your wedding memorable with our all-in-one event package. Includes venue, catering, decoration, and entertainment!",
  highlights: [
    "Luxury Venue with 500+ Seating",
    "Complete Catering Service",
    "Live DJ & Entertainment",
    "Custom Wedding Decor",
  ],
  details:
    "Our premium wedding package offers everything needed for a grand event. Professional planners, decorators, and caterers will make your event flawless.",
  reviews: {
    href: "#",
    average: 4.8,
    totalCount: 152,
  },
  packages: [
    { id: 1, name: "Standard Package", price: 500000 },
    { id: 2, name: "Premium Package", price: 750000 },
    { id: 3, name: "VIP Package", price: 1000000 },
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct, review } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");
  // console.log("param",productId,customersProduct.product)

  const handleSetActiveImage = (image) => {
    setActiveImage(image);
  };

  const handleSubmit = () => {
    // const data = { productId, size: selectedSize.name };

    const data = { productId };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: productId, jwt };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));
  }, [productId]);

  // console.log("reviews ",review)

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* product details */}
        <section className="grid grid-cols-1 px-4 pt-10 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              {/* main image */}
              <img
                src={activeImage?.src || customersProduct.product?.imageUrl}
                alt={product.images[0].alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="flex flex-wrap justify-center space-x-5">
              {product.images.map((image, index) => (
                <div
                  key={image.id || image.src || index} // 👈 use a unique key
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  {/* <img
        src={image.src}
        alt={image.alt}
        className="object-cover object-center w-full h-full"
      /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl px-4 pb-16 mx-auto lg:col-span-1 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg font-semibold tracking-tight text-gray-900 lg:text-xl ">
                {customersProduct.product?.brand}
              </h1>
              <h1 className="pt-1 text-lg tracking-tight text-gray-900 lg:text-xl opacity-60">
                {customersProduct.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex items-center mt-6 space-x-5 text-lg tracking-tight text-gray-900 lg:text-xl">
                <p className="font-semibold">
                  {customersProduct.product?.discountedPrice != null
                    ? `₹${customersProduct.product.discountedPrice}`
                    : ""}
                </p>
                <p className="opacity-50 ">
                  ₹{customersProduct.product?.price}
                </p>
                <p className="font-semibold text-green-600">
                  {customersProduct.product?.discountPersent != null
                    ? `${customersProduct.product.discountPersent}% Off`
                    : ""}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>

                <div className="flex items-center space-x-3">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />

                  <p className="text-sm opacity-60">42807 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>

              <form className="mt-10" onSubmit={handleSubmit}>
                {/* Sizes */}
                {/* <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-1 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                                >
                                  <svg
                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {customersProduct.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                {/* <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3> */}

                <div className="mt-4">
                  {/* <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul> */}
                  <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                    {customersProduct.product?.highlights?.map(
                      (highlight, i) => (
                        <li key={i} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      )
                    ) || ""}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                {/* <h2 className="text-sm font-medium text-gray-900">Details</h2> */}

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {customersProduct.product?.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and review section */}
        <section className="">
          <h1 className="pb-4 text-lg font-semibold">
            Recent Review & Ratings
          </h1>

          <div className="p-5 border">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {review.reviews?.map((item, i) => (
                    <ProductReviewCard item={item} />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className="pb-1 text-xl font-semibold">Product Ratings</h1>
                <div className="flex items-center pb-10 space-x-3">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />

                  <p className="opacity-60">42807 Ratings</p>
                </div>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Excellent</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="p-2 opacity-50">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Very Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="p-2 opacity-50">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className="bg-[#885c0a]"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                        color="orange"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="p-2 opacity-50">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Avarage</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#885c0a", // stroke color
                          },
                        }}
                        variant="determinate"
                        value={21}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="p-2 opacity-50">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Poor</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="p-2 opacity-50">19259</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* similer product */}
        <section className="pt-10 ">
          <h1 className="py-5 text-xl font-bold">Similer Products</h1>
          <div className="flex flex-wrap space-y-5">
            {gounsPage1.map((item) => (
              <HomeProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
