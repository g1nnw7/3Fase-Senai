-- AddForeignKey
ALTER TABLE "public"."consulta" ADD CONSTRAINT "consulta_medico_responsavel_id_fkey" FOREIGN KEY ("medico_responsavel_id") REFERENCES "public"."usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
