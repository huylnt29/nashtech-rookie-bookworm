-- CREATE OR REPLACE FUNCTION setBatchIndex()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.index := COALESCE(
--         (SELECT MAX(index) + 1 FROM public."Batch" as batch WHERE batch."bookId" = NEW."bookId"),
--         1
--     );
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER beforeInsertBatch
-- BEFORE INSERT ON public."Batch"
-- FOR EACH ROW
-- EXECUTE FUNCTION setBatchIndex();

