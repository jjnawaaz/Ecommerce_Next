import { ProductDetail } from "@/components/productDetail";
import { stripe } from "@/lib/stripe";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  // To get rid of next error while sending product prop
  const plainProduct = JSON.parse(JSON.stringify(product));
  return (
    <>
      <ProductDetail product={plainProduct} />
    </>
  );
};

export default ProductPage;
