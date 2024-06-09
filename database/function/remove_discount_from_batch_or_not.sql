CREATE OR REPLACE FUNCTION removeDiscountFromBatchOrNot()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public."Batch"
	SET "discountId" = NULL
	WHERE "discountId" = NEW."id";
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;