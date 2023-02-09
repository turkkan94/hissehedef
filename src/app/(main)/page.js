import { Inter } from "@next/font/google";
import IndicesCards from "@/components/dashboard/indicescards/IndicesCards";
import Bist100 from "@/components/dashboard/bist100/Bist100";

const inter = Inter({ subsets: ["latin"] });

const getIndicesData = async () => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v7/finance/quote?symbols=XU100.IS%2CXU030.IS%2CXBANK.IS%2CUSDTRY=X`
  );
  const indicesData = await res.json();
  return indicesData;
};
const bist100 =
  "AGHOL.IS%2CAKBNK.IS%2CAKFGY.IS%2CAKSA.IS%2CAKSEN.IS%2CALGYO.IS%2CALARK.IS%2CALBRK.IS%2CALKIM.IS%2CAEFES.IS%2CASUZU.IS%2CARCLK.IS%2CASELS.IS%2CAYDEM.IS%2CBAGFS.IS%2CBASGZ.IS%2CBERA.IS%2CBIMAS.IS%2CBIOEN.IS%2CBRYAT.IS%2CBUCIM.IS%2CCCOLA.IS%2CCEMTS.IS%2CCIMSA.IS%2CDOHOL.IS%2CDOAS.IS%2CEGEEN.IS%2CECILC.IS%2CEKGYO.IS%2CENJSA.IS%2CENKAI.IS%2CERBOS.IS%2CEREGL.IS%2CEUREN.IS%2CFENER.IS%2CFROTO.IS%2CGWIND.IS%2CGESAN.IS%2CGLYHO.IS%2CGSDHO.IS%2CGUBRF.IS%2CSAHOL.IS%2CHEKTS.IS%2CIPEKE.IS%2CISDMR.IS%2CISFIN.IS%2CISGYO.IS%2CJANTS.IS%2CKRDMD.IS%2CKARSN.IS%2CKERVT.IS%2CKZBGY.IS%2CKLRHO.IS%2CKMPUR.IS%2CKCAER.IS%2CKCHOL.IS%2CKONTR.IS%2CKORDS.IS%2CKOZAL.IS%2CKOZAA.IS%2CMAVI.IS%2CMGROS.IS%2CNTHOL.IS%2CODAS.IS%2COTKAR.IS%2COYAKC.IS%2CPSGYO.IS%2CPGSUS.IS%2CPETKM.IS%2CSASA.IS%2CSELEC.IS%2CSNGYO.IS%2CSMRTG.IS%2CSKBNK.IS%2CSOKM.IS%2CTAHVL.IS%2CTKFEN.IS%2CTKNSA.IS%2CTOASO.IS%2CTSPOR.IS%2CTUKAS.IS%2CTCELL.IS%2CTMSN.IS%2CTUPRS.IS%2CTHYAO.IS%2CTTKOM.IS%2CTTRAK.IS%2CGARAN.IS%2CHALKB.IS%2CISCTR.IS%2CTSKB.IS%2CTURSG.IS%2CSISE.IS%2CVAKBN.IS%2CULKER.IS%2CVESBE.IS%2CVESTL.IS%2CYKBNK.IS%2CYYLGD.IS%2CZOREN.IS";

const getStockData = async () => {
  const res = await fetch(
    `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${bist100}`
  );
  const stockData = await res.json();
  return stockData;
};
export default async function Home() {
  const indices = await getIndicesData();
  const stocksData = await getStockData();

  return (
    <div className="col-span-12 px-[var(--margin-x)] pb-8">
      <IndicesCards indices={indices} />
      <Bist100 stocksData={stocksData} />
    </div>
  );
}
