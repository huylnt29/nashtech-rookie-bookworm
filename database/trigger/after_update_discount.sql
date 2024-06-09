CREATE TRIGGER afterUpdateDiscount
AFTER UPDATE ON public."Discount"
FOR EACH ROW
WHEN (NEW."state" = 'INACTIVE')
EXECUTE FUNCTION removeDiscountFromBatchOrNot();