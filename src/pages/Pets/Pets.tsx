import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css";
import { useSearchParams } from "react-router-dom";
import { usePetList } from "../../hooks";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";
import { filterColumns } from "./Pets.constants";
import { FormEvent } from "react";
import { GetPetsRequest } from "../../interfaces/pet";
import Skeleton from "react-loading-skeleton";
import { Card } from "../../components/common/Card";
import { Pagination } from "../../components/common/Pagination";

export function Pets() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlParams = {
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
    type: searchParams.get("type") ?? "",
    size: searchParams.get("size") ?? "",
    gender: searchParams.get("gender") ?? "",
  };

  const { data, isLoading } = usePetList(urlParams);

  function changePage(page: number) {
    setSearchParams((params) => {
      params.set("page", String(page));
      return params;
    });
  }

  

  function getFormValue(form: HTMLFormElement) {
    const formData = new FormData(form)
    return Object.fromEntries(formData)
  }

  function updateSearchParams(urlParams: GetPetsRequest) {
    const fields: (keyof GetPetsRequest)[] = ['type', 'size', 'gender']
    const newParams = new URLSearchParams()

    fields.forEach((field) => {
      if (urlParams[field]) {
        newParams.set(field, String(urlParams[field]))
      }
    })
    newParams.set('page', '1')

    return newParams
  }

  function applyFilters(event: FormEvent) {
    event.preventDefault()

    const formValues = getFormValue(event.target as HTMLFormElement)
    const newSearchParams = updateSearchParams(formValues)

    setSearchParams(newSearchParams)
  }

  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        <form className={styles.filters} onSubmit={applyFilters}>
          <div className={styles.columns}>
            {filterColumns.map((filter) => (
              <div key={filter.name} className={styles.column}>
                <Select
                  label={filter.title}
                  defaultValue={urlParams[filter.name]}
                  name={filter.name}
                  options={filter.options}
                />
              </div>
            ))}
          </div>
          <Button type="submit">Buscar</Button>
        </form>

        {isLoading && (
          <Skeleton containerClassName={styles.skeleton} count={10} />
        )}

        <main className={styles.list}>
          {data?.items.map((pet) => (
            <Card
              key={pet.id}
              href={`/pet/${pet.id}`}
              text={pet.name}
              thumb={pet.photo}
            />
          ))}
        </main>
        {data?.currentPage && (
          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            onPageChange={(number) => console.log(number)}
          />
        )}
      </div>
    </Grid>
  );
}