export default async function ErrorPage() {
  return (
    <section className='flex justify-center mt-24 text-lg'>
      <div className='dark:text-white text-center'>
        <h1>
          혹시 로그인 시도한 구글 계정이 <b>개인 계정</b>이 아닐까요?
        </h1>
        <br />
        <h1>계정 확인 바랍니다. 😥</h1>
      </div>
    </section>
  );
}
